import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Menu.css';
const Menu = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(response => {
        setMenuItems(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {/* <img src={`path/to/your/images/${item.id}.jpg`} alt={item.title} /> */}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item.title, item.description)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
