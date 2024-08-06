const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

router.get('/', (req, res) => {
  Menu.getAll((items) => {
    res.json(items);
  });
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  Menu.create(title, description, (newItem) => {
    res.json(newItem);
  });
});

module.exports = router;
