import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";
import MenuNavbar from "./MenuNavbar";

import ThirtyNinePriceImg from "../../resources/39-price.png";

import Kiwi from "../../resources/fruit-tea/kiwi.png";
import Lychee from "../../resources/fruit-tea/lychee.png";
import GreenApple from "../../resources/fruit-tea/green-apple.png";
import Lemon from "../../resources/fruit-tea/lemon.png";
import HoneyPeach from "../../resources/fruit-tea/honey-peach.png";
import Mango from "../../resources/fruit-tea/mango.png";
import Blueberry from "../../resources/fruit-tea/blueberry.png";
import Strawberry from "../../resources/fruit-tea/strawberry.png";
import PassionFruit from "../../resources/fruit-tea/passion-fruit.png";
import Watermelon from "../../resources/fruit-tea/watermelon.png";

const productImages = {
    'Kiwi': Kiwi,
    'Lychee': Lychee,
    'Green Apple': GreenApple,
    'Lemon': Lemon,
    'Honey Peach': HoneyPeach,
    'Mango': Mango,
    'Blueberry': Blueberry,
    'Passion Fruit': PassionFruit,
    'Watermelon': Watermelon,
  };

const FruitTeaProducts = () => {

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
        <section id="fruitTea-section">
            <header>
                <div className="header-title">
                    <h1>FRUIT TEA</h1>
                    <h2>w/ CRYSTALS</h2>
                </div>

                <img className="price" src={ThirtyNinePriceImg} alt="" />
            </header>
            <div className="main-container">
                <div className="products-grid">
                    <img src={Kiwi} alt="Kiwi" onClick={() => handleImageClick('Kiwi')} />
                    <img src={Lychee} alt="Lychee" onClick={() => handleImageClick('Lychee')} />
                    <img src={GreenApple} alt="Green Apple" onClick={() => handleImageClick('Green Apple')} />
                    <img src={Lemon} alt="Lemon" onClick={() => handleImageClick('Lemon')} />
                    <img src={HoneyPeach} alt="Honey Peach" onClick={() => handleImageClick('Honey Peach')} />
                    <img src={Mango} alt="Mango" onClick={() => handleImageClick('Mango')} />
                    <img src={Blueberry} alt="Blueberry" onClick={() => handleImageClick('Blueberry')} />
                    <img src={Strawberry} alt="Strawberry" onClick={() => handleImageClick('Strawberry')} />
                    <img src={PassionFruit} alt="Passion Fruit" onClick={() => handleImageClick('Passion Fruit')} />
                    <img src={Watermelon} alt="Watermelon" onClick={() => handleImageClick('Watermelon')} />
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

export default FruitTeaProducts;