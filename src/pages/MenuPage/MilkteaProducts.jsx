import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";
import MenuNavbar from "./MenuNavbar";

import FortyNinePriceImg from "../../resources/49-price.png";

import Okinawa from "../../resources/milktea/okinawa.png";
import Wintermelon from "../../resources/milktea/wintermelon.png";
import RedVelvet from "../../resources/milktea/red-velvet.png";
import Matcha from "../../resources/milktea/matcha.png";
import DoubleDutch from "../../resources/milktea/okinawa.png";
import Cheesecake from "../../resources/milktea/cheesecake.png";
import DarkChoco from "../../resources/milktea/dark-choco.png";
import ChocoKisses from "../../resources/milktea/choco-kisses.png";
import SaltedCaramel from "../../resources/milktea/salted-caramel.png";
import Taro from "../../resources/milktea/taro.png";
import Strawberry from "../../resources/milktea/strawberry.png";

const productImages = {
    'Okinawa': Okinawa,
    'Wintermelon': Wintermelon,
    'Red Velvet': RedVelvet,
    'Matcha': Matcha,
    'Double Dutch': DoubleDutch,
    'Cheesecake': Cheesecake,
    'Dark Choco': DarkChoco,
    'Choco Kisses': ChocoKisses,
    'Salted Caramel': SaltedCaramel,
    'Taro': Taro,
    'Strawberry': Strawberry,
  };

const MilkteaProducts = () => {

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
        <section>
            <header>
                <div className="header-title">
                    <h1>MILK TEA</h1>
                    <h2>W/ PEARLS</h2>
                </div>

                <img className="price" src={FortyNinePriceImg} alt="" />
            </header>
            <div className="main-container">
                <div className="products-grid">
                    <img src={Okinawa} alt="Okinawa" onClick={() => handleImageClick('Okinawa')} />
                    <img src={Wintermelon} alt="Wintermelon" onClick={() => handleImageClick('Wintermelon')} />
                    <img src={RedVelvet} alt="Red Velvet" onClick={() => handleImageClick('Red Velvet')} />
                    <img src={Matcha} alt="Matcha" onClick={() => handleImageClick('Matcha')} />
                    <img src={DoubleDutch} alt="Double Dutch" onClick={() => handleImageClick('Double Dutch')} />
                    <img src={Cheesecake} alt="Cheesecake" onClick={() => handleImageClick('Cheesecake')} />
                    <img src={DarkChoco} alt="Dark Choco" onClick={() => handleImageClick('Dark Choco')} />
                    <img src={ChocoKisses} alt="Choco Kisses" onClick={() => handleImageClick('Choco Kisses')} />
                    <img src={SaltedCaramel} alt="Salted Caramel" onClick={() => handleImageClick('Salted Caramel')} />
                    <img src={Taro} alt="Taro" onClick={() => handleImageClick('Taro')} />
                    <img src={Strawberry} alt="Strawberry" onClick={() => handleImageClick('Strawberry')} />
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

export default MilkteaProducts;