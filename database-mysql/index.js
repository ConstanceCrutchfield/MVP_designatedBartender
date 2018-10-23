/* eslint key-spacing: 0 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'FILL_ME_IN',
  database : 'test',
});
// all functionality of database queries here!

const selectAll = (callback) => {
  connection.query('SELECT * FROM items', (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const searchItems = (callback) => {
  // query items table for name or ingredient
  connection.query('select * from items where name = ? or ingredient = ?', [req.name, req.ingred], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const createItem = (req, callback) => {
  // insert new item into table
  connection.query('insert into items (name, instructions, ingred, image), values (?,?,?,?)', [req.name, req.ingred], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const addReview = (req, callback) => {
  // update rewiew for item
  connection.query('update items set reviews=? where name =?', [req.review, req.name], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports.selectAll = selectAll;
module.exports.searchItems = searchItems;
module.exports.createItem = createItem;
module.exports.addReview = addReview;
