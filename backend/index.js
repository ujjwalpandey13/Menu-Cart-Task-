const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const menuRoutes = require('./routes/menu');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/menu', menuRoutes);
app.use('/api/cart', cartRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
