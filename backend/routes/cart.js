const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

router.get('/', (req, res) => {
  Cart.getAll((items) => {
    res.json(items);
  });
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  Cart.create(title, description, (newItem) => {
    res.json(newItem);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Cart.delete(id, () => {
    res.status(204).end();
  });
});

module.exports = router;

