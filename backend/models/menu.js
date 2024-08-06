const db = require('../db');

const Menu = {
  getAll: (callback) => {
    db.query('SELECT * FROM menu', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },
  create: (title, description, callback) => {
    db.query('INSERT INTO menu (title, description) VALUES (?, ?)', [title, description], (err, results) => {
      if (err) throw err;
      callback({ id: results.insertId, title, description });
    });
  }
};

module.exports = Menu;



