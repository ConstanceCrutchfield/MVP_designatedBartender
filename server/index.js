const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();

app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`listening on port ${PORT}!`);
});

// all requests from server to database here!
// all requests to API from here using request handlers!

app.post('/create', (req, res) => {
  // request object must name, ingredients, instructions, image(optional)
  // new cocktail added to database
  // app view updated with new cocktail
  console.log(req.query, 'body at endpoint');
  db.createItem(req.query, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/search', (req, res) => {
  // request object must have ingredient or drink name to query
  // search database for match
  // if no match, search theCocktailDB for similar drinks
  console.log(req.query, 'query');
  if (req.query.cocktailName) {
    db.searchItemsByName(req.query.cocktailName, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        console.log(`searched for ${req.query.cocktailName}`);
        res.json(data);
      }
    });
  }
  if (req.query.ingredient) {
    db.searchItemsByIngred(req.query.ingredient, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        console.log(`searched for ${req.query.ingredient}`);
        res.json(data);
      }
    });
  } else {
    res.sendStatus(500);
  }
});

// app.post('/review', (req, res) => {
//   // request object needs drink id/name, and user inputed review
//   // review is added to cocktail in database
//   // reviews for each item stored on join table?
//   // update app view with new reviews
//   db.addReview(req.body, (err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.get('/items', (req, res) => {
  // get all items from db
  db.selectAll((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
