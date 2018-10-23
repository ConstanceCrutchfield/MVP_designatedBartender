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
  connection.query('SELECT * FROM items', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const searchItemsByName = (req, callback) => {
  // query items table for name or ingredient
  const q = 'select * from items where cocktailName = ?';
  connection.query(q, [req.name, req.cocktailName], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const searchItemsByIngred = (req, callback) => {
  // query item_ingred table for ingredient
  const q = 'select * from item_ingred where cocktailName = ?';
  connection.query(q, [req.name, req.cocktailName], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const createItem = (req, callback) => {
  // insert new item into table
  const q = 'insert into items (cocktailName, instructions, ingredients, thunbnail), values (?,?,?,?)';
  connection.query(q, [req.cocktailName, req.ingredients, req.instructions, req.thunbnail], (err, results) => {
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
module.exports.searchItemsByName = searchItemsByName;
module.exports.searchItemsByIngred = searchItemsByIngred;
module.exports.createItem = createItem;
module.exports.addReview = addReview;
