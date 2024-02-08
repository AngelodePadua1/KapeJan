import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FrappeProducts from "./FrappeProducts";
import FruitTeaProducts from "./FruitTeaProducts";
import IcedCoffeeProducts from "./IcedCoffeeProducts";
import MilkteaProducts from "./MilkteaProducts";

const MenuLayout = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/frappe">Frappe</Link>
            </li>
            <li>
              <Link to="/fruitTea">Fruit Tea</Link>
            </li>
            <li>
              <Link to="/icedCoffee">Iced Coffee</Link>
            </li>
            <li>
              <Link to="/milkTea">Milk Tea</Link>
            </li>
          </ul>
        </nav>

        <Route path="/frappe" component={FrappeProducts} />
        <Route path="/fruitTea" component={FruitTeaProducts} />
        <Route path="/icedCoffee" component={IcedCoffeeProducts} />
        <Route path="/milkTea" component={MilkteaProducts} />
      </div>
    </Router>
  );
};

export default MenuLayout;