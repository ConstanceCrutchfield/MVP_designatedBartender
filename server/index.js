const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('../database-mysql');
const requestHandler = require('./requestHandler');

const app = express();

app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

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

});

app.get('/search', (req, res) => {
  // request object must have ingredient or drink name to query
  // search database for match
  // if no match, search theCocktailDB for similar drinks
  // update app view with search results

});

app.post('/review', (req, res) => {
  // request object needs drink id/name, and user inputed review
  // review is added to cocktail in database
    // reviews for each item stored on join table?
  // update app view with new reviews

});

app.get('/items', (req, res) => {
  // get all items from database
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
