import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext'; // Ensure this path matches your project structure
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0); // State to keep track of cart count
    const { userId } = useUser(); // Use the userId from UserContext

    useEffect(() => {
        if (!userId) return; // Do not proceed if userId is not set

        const db = getFirestore();
        const cartQuery = query(collection(db, "cart"), where("userId", "==", userId));

        const unsubscribe = onSnapshot(cartQuery, (snapshot) => {
            const loadedCartItems = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCartItems(loadedCartItems);
        });

        return () => unsubscribe(); // Cleanup subscription on component unmount
    }, [userId]); // Re-run effect when userId changes

    useEffect(() => {
        // Update cart count whenever cartItems changes
        setCartCount(cartItems.length);
    }, [cartItems]); // Depend on cartItems to recalculate count

    // Other cart context functions (add to cart, remove from cart, etc.) go here
    // Ensure they utilize the current userId for operations

    return (
        <CartContext.Provider value={{ cartItems, cartCount /* other context values and functions */ }}>
            {children}
        </CartContext.Provider>
    );
};
