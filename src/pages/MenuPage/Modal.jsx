import { React, useState } from 'react';
import './Modal.css';

import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig'; 
import { Timestamp } from 'firebase/firestore';
import { useUser } from './UserContext';

const Modal = ({ show, productName, onClose, children }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [cartAddedNotification, setCartAddedNotification] = useState(false);
    const [sizeWarning, setSizeWarning] = useState(false);
    const { userId } = useUser(); // Use the user ID from UserContext

    if (!show) {
        return null;
    }

    const sizeToPriceMap = {
        SOLO: 39,
        MEDIUM: 49,
        LARGE: 69
      };

    const handleAddToCartClick = () => {
        if (selectedSize) {
            setCartAddedNotification(true);
            handleAddToCart();      
                 
        } else {
            setSizeWarning(true); 
        }
    };

    const handleAddToCart = async () => {
      
        const price = sizeToPriceMap[selectedSize];      
      
        try {
          const cartItem = {
            product: productName,
            size: selectedSize,
            quantity: 1,      
            price: price,      
            userId: userId,
            addedAt: Timestamp.now(),
          };
      
          const colRef = collection(getFirestore(), 'cart');
          const docRef = await addDoc(colRef, cartItem);
          console.log('Document written with ID: ', docRef.id);
          setCartAddedNotification(true);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      };

    const handleSizeClick = (size) => {
        if (selectedSize === size) {
            setSelectedSize(null);      
        } else {
            setSelectedSize(size);
            setSizeWarning(false);      
        }
    };

    const handleCloseNotification = () => {
        if (cartAddedNotification) {
            setCartAddedNotification(false);
            onClose();      
        } else if (sizeWarning) {
            setSizeWarning(false);      
        }
    };



    return (
        <>
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="product-image">
                        {children}
                    </div>
                    <div className="product-details">
                        <div className="modal-header">
                            <button onClick={onClose} className="close-btn">X</button>
                        </div>
                        <div className="size-options">
                            {     }
                            <button
                                className={`size-option ${selectedSize === 'SOLO' ? 'highlighted' : ''}`}
                                onClick={() => handleSizeClick('SOLO')}
                            >
                                SOLO - 39
                            </button>
                            <button
                                className={`size-option ${selectedSize === 'MEDIUM' ? 'highlighted' : ''}`}
                                onClick={() => handleSizeClick('MEDIUM')}
                            >
                                MEDIUM - 49
                            </button>
                            <button
                                className={`size-option large ${selectedSize === 'LARGE' ? 'highlighted' : ''}`}
                                onClick={() => handleSizeClick('LARGE')}
                            >
                                LARGE - 69
                            </button>
                        </div>
                        <button className="add-to-cart-btn" onClick={handleAddToCartClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>

        {cartAddedNotification && (
                <div className="notification-modal">
                    <div className="notification-content">
                        <p>Added to your cart</p>
                        <button onClick={handleCloseNotification}>OK</button>
                    </div>
                </div>
            )}

        {sizeWarning && (
                    <div className="notification-modal">
                        <div className="notification-content">
                            <p>You need to choose the size first</p>
                        <button onClick={handleCloseNotification}>Ok</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;