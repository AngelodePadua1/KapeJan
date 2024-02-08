import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc, addDoc, onSnapshot } from "firebase/firestore"; 
import './CartPage.css';
import MenuNavbar from './MenuNavbar';
import loadingGif from '../../resources/LoadingAnimation.gif';
import OrderProcessedImg from '../../resources/OrderProcessed.png';
import { useUser } from './UserContext';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const { userId } = useUser();
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("Order Processing...");
    const [animateGif, setAnimateGif] = useState(true);
    

    useEffect(() => {
        if (!userId) return;

        const db = getFirestore();
        const q = query(collection(db, "cart"), where("userId", "==", userId));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setCartItems(items);
        });

        return () => unsubscribe(); // Cleanup on component unmount
    }, [userId]);

    const [showModal, setShowModal] = useState(false); // State to control the modal visibility

    // Function to toggle the modal
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const removeFromCart = async (itemId) => {
        const db = getFirestore();
        const itemRef = doc(db, "cart", itemId); // Reference to the document in the 'cart' collection
    
        try {
            await deleteDoc(itemRef); // Delete the document from Firestore
            console.log("Item removed:", itemId); // Debugging
            const updatedCartItems = cartItems.filter(item => item.id !== itemId); // Update local state
            setCartItems(updatedCartItems);
        } catch (error) {
            console.error("Error removing item from cart:", error); // Error handling
        }
    };

    // Helper function to format price
    const formatPrice = (price) => {
        // Check if price is a number and is not undefined
        if (typeof price === 'number') {
            return `$${price.toFixed(2)}`;
        }
        // If price is not a number or is undefined, return a placeholder or message
        return "Price unavailable";
    };

    // Function to calculate the total price of the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.price ? item.price * item.quantity : 0);
        }, 0);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowLoadingModal(true); 
        setLoadingMessage("Order Processing...");
        setAnimateGif(true);
        

        const db = getFirestore();
        const name = event.target.name.value;
        const location = event.target.location.value;
        const paymentMethod = event.target.payment.value;

        const newOrder = {
            userId: userId,
            items: cartItems,
            name: name,
            location: location,
            paymentMethod: paymentMethod,
            createdAt: new Date() 
        };

        try {
            await addDoc(collection(db, "orders"), newOrder);

            await Promise.all(cartItems.map(item => deleteDoc(doc(db, "cart", item.id))));

            setCartItems([]);

            setTimeout(() => {
                setLoadingMessage("Order Processed"); 
                setAnimateGif(false); 
            }, 10000); 

            setShowModal(false); 
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };


    const onClose = () => {
        setShowModal(false);
        setShowLoadingModal(false);
      };

    return (
        <div>
            <MenuNavbar />
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart">
                <div className="cart-header">
                    <span>Item</span>
                    <span>Size</span>
                    <span>Quantity</span>
                    <span>Price</span>
                </div>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <span>{item.product}</span>
                            <span>{item.size}</span>
                            <span>{item.quantity}</span>
                            <span>{formatPrice(item.price)}</span>
                            <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                            Remove
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <strong>Total: {formatPrice(calculateTotal())}</strong>
                </div>
                {showModal && (
                    <div className="modal1">
                        <div className="modal-content1">
                            <button onClick={onClose} className="close-btn2">X</button>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                
                                <label htmlFor="location">Location:</label>
                                <input type="text" id="location" name="location" placeholder="Enter your location" required />
                                
                                <label htmlFor="payment">Payment Method:</label>
                                <select id="payment" name="payment" required>
                                    <option value="cash">Cash</option>
                                    <option value="credit_card">Credit Card</option>
                                </select>
                                
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>          
            )}
            {showLoadingModal && (
                <div className="loading-modal">
                    <div className="loading-content">
                        <img src={animateGif ? loadingGif : OrderProcessedImg} alt={loadingMessage} />
                        <p className="overlay-text">{loadingMessage}</p>
                        {/* Show the close button only when the GIF is not animated anymore */}
                        {!animateGif && (
                            <button onClick={onClose} className="close-overlay-btn">X</button>
                        )}
                    </div>
                </div>
            )}
            <button className="checkout-button" onClick={toggleModal}>CHECK OUT</button>
            </div>
        </div>
        </div>
    );
};

export default CartPage;