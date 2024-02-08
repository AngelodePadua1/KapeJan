import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";
import MenuNavbar from "./MenuNavbar";

import CoffeeBasedImg from "../../resources/coffeebased.png";
import FiftyNinePriceImg from "../../resources/59-price.png";

import KapeBrusko from "../../resources/IcedCoffee/kape-brusko.png";
import KapeWhite from "../../resources/IcedCoffee/kape-white.png";
import KapeMocha from "../../resources/IcedCoffee/kape-mocha.png";
import KapeFudge from "../../resources/IcedCoffee/kape-fudge.png";
import KapeMatcha from "../../resources/IcedCoffee/kape-matcha.png";
import KapeKaramel from "../../resources/IcedCoffee/kape-karamel.png";
import KapeSpanish from "../../resources/IcedCoffee/kape-spanish.png";
import KapeVietnamese from "../../resources/IcedCoffee/kape-vietnamese.png";
import KapeMacch from "../../resources/IcedCoffee/kape-macch.png";

const productImages = {
    'Kape Brusko': KapeBrusko,
    'Kape White': KapeWhite,
    'Kape Mocha': KapeMocha,
    'Kape Fudge': KapeFudge,
    'Kape Matcha': KapeMatcha,
    'Kape Karamel': KapeKaramel,
    'Kape Spanish': KapeSpanish,
    'Kape Vietnamese': KapeVietnamese,
    'Kape Macch': KapeMacch,
  };


const IcedCoffeeProducts = () => {

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
                    <h1>ICED COFFEE</h1>
                    <h2>w/ CREAM PUFFS</h2>

                    <img src={CoffeeBasedImg} alt="" />
                </div>

                <img className="price" src={FiftyNinePriceImg} alt="" />
            </header>
            <div className="main-container">
                <div className="products-grid">
                    <img src={KapeBrusko} alt="Kape Brusko" onClick={() => handleImageClick('Kape Brusko')} />
                    <img src={KapeWhite} alt="Kape White" onClick={() => handleImageClick('Kape White')} />
                    <img src={KapeMocha} alt="Kape Mocha" onClick={() => handleImageClick('Kape Mocha')} />
                    <img src={KapeFudge} alt="Kape Fudge" onClick={() => handleImageClick('Kape Fudge')} />
                    <img src={KapeMatcha} alt="Kape Matcha" onClick={() => handleImageClick('Kape Matcha')} />
                    <img src={KapeKaramel} alt="Kape Karamel" onClick={() => handleImageClick('Kape Karamel')} />
                    <img src={KapeSpanish} alt="Kape Spanish" onClick={() => handleImageClick('Kape Spanish')} />
                    <img src={KapeVietnamese} alt="Kape Vietnamese" onClick={() => handleImageClick('Kape Vietnamese')} />
                    <img src={KapeMacch} alt="Kape Macch" onClick={() => handleImageClick('Kape Macch')} />
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

export default IcedCoffeeProducts;
