const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const requestHandler = require('./requestHandler');

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
  console.log(req.body);
  db.createItem(req.body, (err, data) => {
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
  // update app view with search results
  // console.log(req.query, 'query');
  db.searchItems(req.query.q, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/review', (req, res) => {
  // request object needs drink id/name, and user inputed review
  // review is added to cocktail in database
  // reviews for each item stored on join table?
  // update app view with new reviews
  db.addReview(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/items', (req, res) => {
  // get all items from database
  // axios({
  //   method: 'get',
  //   url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  // }).then((response) => {
  //   console.log(response);
  //   const drink = response[0];
  //   db.createItem({
  //     cocktailName: drink.strDrink,
  //     instructions: drink.strInstructions,
  //     thumbnail: drink.strDrinkThumb,
  //     ingredients: drink.strIngredient1,
  //   }, (err, data) => {
  //     if (err) {
  //       console.log('error creating item', err);
  //     } else {
  //       console.log(data);
  //       res.json(data);
  //     }
  //   });
  // }).catch((error) => {
  //   console.log(error, 'error getting item');
  // });
  /////////////
  db.selectAll((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
