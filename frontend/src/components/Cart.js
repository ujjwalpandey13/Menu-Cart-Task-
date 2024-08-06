import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Cart.css';
const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
