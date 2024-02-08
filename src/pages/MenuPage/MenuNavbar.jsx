import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";      
import './MenuNavbar.css';
import { useCart } from './CartContext';

import kapejan_logo from "../../resources/kapejan_logo_smol.png";

const MenuNavbar = () => {
  const { cartCount } = useCart();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Image src={kapejan_logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/frappe" className="nav-link">
                Frappe
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fruitTea" className="nav-link">
                Fruit Tea
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/icedCoffee" className="nav-link">
                Iced Coffee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/milkTea" className="nav-link">
                Milk Tea
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/cart" className="nav-link cart-button">
                Add to Cart {cartCount > 0 ? `(${cartCount})` : ''}
            </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;