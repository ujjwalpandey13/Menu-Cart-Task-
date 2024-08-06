const db = require('../db');

const Cart = {
  getAll: (callback) => {
    db.query('SELECT * FROM cart', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },
  create: (title, description, callback) => {
    db.query('INSERT INTO cart (title, description) VALUES (?, ?)', [title, description], (err, results) => {
      if (err) throw err;
      callback({ id: results.insertId, title, description });
    });
  },
  delete: (id, callback) => {
    db.query('DELETE FROM cart WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
};

module.exports = Cart;


