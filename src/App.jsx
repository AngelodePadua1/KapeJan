import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from 'react';

import LandingPage from './LandingPage';
import MenuPage from './MenuPage';

import FrappeProducts from "./pages/FrappeProducts";
import FruitTeaProducts from "./pages/FruitTeaProducts";
import IcedCoffeeProducts from "./pages/IcedCoffeeProducts";
import MilkteaProducts from "./pages/MilkteaProducts";

import AboutUs from "./pages/AboutUsPage/aboutus";

import { getFirestore, collection, query, where, getDocs, deleteDoc } from "firebase/firestore";

const clearCart = async (userId) => {
  const db = getFirestore();
  const q = query(collection(db, "cart"), where("userId", "==", userId));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const App = () => {
    useEffect(() => {
      // Function to generate a new user ID for each session
      const generateUserId = () => {
        const newUserId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('anonymousId', newUserId);
        return newUserId;
      };

      // Generate a new user ID on app load/refresh
      const userId = generateUserId();

      const handleBeforeUnload = async () => {
        // Optionally, clear the cart on tab close or refresh
        await clearCart(userId);
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
    
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/milktea" element={<MilkteaProducts />} />
                    <Route path="/icedCoffee" element={<IcedCoffeeProducts />} />
                    <Route path="/fruitTea" element={<FruitTeaProducts />} />
                    <Route path="/frappe" element={<FrappeProducts />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
