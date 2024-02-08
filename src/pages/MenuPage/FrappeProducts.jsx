import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";
import MenuNavbar from "./MenuNavbar";

import CoffeeBasedImg from "../../resources/coffeebased.png";
import FiftyNinePriceImg from "../../resources/59-price.png";

import Mocha from "../../resources/frappe/mocha.png";
import CoffeeJelly from "../../resources/frappe/coffee-jelly.png";
import CaramelMacch from "../../resources/frappe/caramel-macch.png";
import CoffeeVanilla from "../../resources/frappe/coffee-vanilla.png";
import WhiteChoco from "../../resources/frappe/white-choco.png";

import CookiesCream from "../../resources/frappe/cookies + cream.png";
import CheesecakeCream from "../../resources/frappe/cheesecake-cream.png";
import TaroCream from "../../resources/frappe/taro-cream.png";
import MatchaCream from "../../resources/frappe/matcha-cream.png";

const productImages = {
    'Mocha': Mocha,
    'Coffee Jelly': CoffeeJelly,
    'Caramel Macch': CaramelMacch,
    'Coffee Vanilla': CoffeeVanilla,
    'White Choco': WhiteChoco,
    'Cookies Cream': CookiesCream,
    'Cheesecake Cream': CheesecakeCream,
    'Taro Cream': TaroCream,
    'Matcha Cream': MatchaCream,
  };

const FrappeProducts = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

         
    const handleImageClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

         
    const closeModal = () => setModalOpen(false);

    const productImage = selectedProduct ? productImages[selectedProduct] : '';

    return (
        <div>
            <MenuNavbar />
        <section id="frappe-section">
            <header>
                <div className="header-title">
                    <h1>FRAPPE</h1>
                    <h2>W/ WHIPPED CREAM</h2>
                    <img src={CoffeeBasedImg} alt="" />
                </div>

                <img className="price" src={FiftyNinePriceImg} alt="" />
            </header>

            <div className="main-container">
                <div className="products-grid">
                    <img src={Mocha} alt="Mocha" onClick={() => handleImageClick('Mocha')} />
                    <img src={CoffeeJelly} alt="Coffee Jelly" onClick={() => handleImageClick('Coffee Jelly')} />
                    <img src={CaramelMacch} alt="Caramel Macch" onClick={() => handleImageClick('Caramel Macch')} />
                    <img src={CoffeeVanilla} alt="Coffee Vanilla" onClick={() => handleImageClick('Coffee Vanilla')} />
                    <img src={WhiteChoco} alt="White Choco" onClick={() => handleImageClick('White Choco')} />
                    <img src={CookiesCream} alt="Cookies Cream" onClick={() => handleImageClick('Cookies Cream')} /> 
                    <img src={CheesecakeCream} alt="Cheesecake Cream" onClick={() => handleImageClick('Cheesecake Cream')} />
                    <img src={TaroCream} alt="Taro Cream" onClick={() => handleImageClick('Taro Cream')} />
                    <img src={MatchaCream} alt="Matcha Cream" onClick={() => handleImageClick('Matcha Cream')} />
                </div>
                <Modal 
                    show={isModalOpen} 
                    productName={selectedProduct}
                    onClose={closeModal}
                >
                    {     }
                    <img src={productImage} alt={selectedProduct} style={{ width: '67%', height: 'auto' }} />
                </Modal>
            </div>
        </section>
        </div>
    );
};

export default FrappeProducts;
