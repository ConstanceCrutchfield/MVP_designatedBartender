/* eslint key-spacing: 0 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
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
  connection.query(q, [req], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(results, 'results from query line 29 db');
      callback(null, results);
    }
  });
};

const searchIngreds = (req, callback) => {
  // query join table
  const q = 'select * from ingreds where cocktailKey = ?';
  connection.query(q, [req.cocktailName], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const createItem = (req) => {
  // insert new item into table
  // add indredients to ingredient table
  console.log(req, 'reached db');
  const qItem = 'insert into items (cocktailName, instructions, thumbnail) values (?,?,?)';
  const ingreds = req.ingredients.split(',');
  const qIngred = 'insert into ingreds (ingredName, cocktailKey) values(?),?';
  connection.query(qItem, [req.cocktailName, req.instructions, req.thumbnail], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
  // insert each ingredient into ingred table
  ingreds.forEach((ingred) => {
    connection.query(qIngred, [ingred, req.cocktailName], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  });
};

// const addReview = (req, callback) => {
//   // update rewiew for item
//   connection.query('update items set reviews=? where name =?', [req.review, req.name], (err, results) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };


module.exports.selectAll = selectAll;
module.exports.searchItemsByName = searchItemsByName;
module.exports.searchIngreds = searchIngreds;
module.exports.createItem = createItem;
// module.exports.addReview = addReview;
