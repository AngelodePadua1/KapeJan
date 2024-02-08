import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import MenuPage from './MenuPage';

import FrappeProducts from "./pages/MenuPage/FrappeProducts";
import FruitTeaProducts from "./pages/MenuPage/FruitTeaProducts";
import IcedCoffeeProducts from "./pages/MenuPage/IcedCoffeeProducts";
import MilkteaProducts from "./pages/MenuPage/MilkteaProducts";
import CartPage from './pages/MenuPage/CartPage';

import AboutUs from './pages/AboutUsPage/aboutus';
import { CartProvider } from './pages/MenuPage/CartContext';
import { UserProvider } from './pages/MenuPage/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<MenuPage /> } />
                    <Route path="/milktea" element={<MilkteaProducts />} />
                    <Route
                        path="/icedCoffee"
                        element={<IcedCoffeeProducts />}
                    />
                    <Route path="/fruitTea" element={<FruitTeaProducts />} />
                    <Route path="/frappe" element={<FrappeProducts />} />
        <Route path="/aboutus" element={<AboutUs /> } />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </UserProvider>
  </React.StrictMode>
);


