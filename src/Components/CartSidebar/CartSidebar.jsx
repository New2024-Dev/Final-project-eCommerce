import React from 'react';
import useProductStore from '../../Store/useProductStore';
import './CartSidebar.css';
import { Link } from "react-router-dom";

function CartSidebar({ onClose }) {
  const { cartItems, removeFromCart, } = useProductStore();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-sidebar">
       <button className="close-btn" onClick={onClose}>×</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: Rp {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Rp {total.toFixed(2)}</h3>
      <Link id='cartlink' to="/Cart">Cart</Link>
    </div>
  );
}

export default CartSidebar;