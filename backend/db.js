const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: 'Ujjwal@123', // replace with your MySQL password
  database: 'menu_cart_system'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

connection.query(`
  CREATE TABLE IF NOT EXISTS menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
  )
`, (err, results) => {
  if (err) throw err;
  console.log('Menu table created or already exists');
});

connection.query(`
  CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
  )
`, (err, results) => {
  if (err) throw err;
  console.log('Cart table created or already exists');
});

module.exports = connection;
