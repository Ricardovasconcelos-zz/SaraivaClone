import React from "react";

import "./Cart.css";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Cart = props => {
  return (
    <div className="Order">
      <Link to="Order" className="linkStyle">
        <div className="Icons">
          <TiShoppingCart size={32} className="Cart" />
          <p>{props.value}</p>
        </div>
      </Link>
    </div>
  );
};
export default Cart;
