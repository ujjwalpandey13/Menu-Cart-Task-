import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import axios from 'axios';
import './styles/App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(response => {
        setCartItems(response.data);
      });
  }, []);

  const addToCart = (title, description) => {
    axios.post('http://localhost:5000/api/cart', { title, description })
      .then(response => {
        setCartItems(prevItems => [...prevItems, response.data]);
      });
  };

  const removeFromCart = (id) => {
    axios.delete(`http://localhost:5000/api/cart/${id}`)
      .then(() => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      });
  };

  return (
    <div>
      <h1>Menu Cart System</h1>
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
