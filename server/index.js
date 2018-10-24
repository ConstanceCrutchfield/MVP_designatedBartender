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
        console.log(data);
        res.send(data);
      }
    });
  } else
  if (req.query.ingredient) {
    axios({
      method: 'get',
      url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${req.query.ingredient}`,
    })
      .then((data) => {
        // data is object.drinks = array of drinks with name, id, thumbnail
        // search for ingreds and instructions
        console.log(data.data.drinks);
        data.data.drinks.forEach((drink) => {
          axios({
            method: 'get',
            url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`,
          }).then((response) => {
            console.log(response.data, 'resoinse line 66');
            const item = response.data.drinks[0];
            db.createItem({
              cocktailName: item.strDrink,
              instructions: item.strInstructions,
              thumbnail: item.strDrinkThumb,
              ingredients: `${item.strIngredient1}, ${item.strIngredient2}, ${item.strIngredient3}, ${item.strIngredient4}`,
            }, (err) => {
              if (err) {
                res.sendStatus(500);
              }
            });
          })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // db.searchItemsByIngred(req.query.ingredient, (err, data) => {
    //   if (err) {
    //     res.sendStatus(500);
    //   } else {
    //     console.log(`searched for ${req.query.ingredient}`);
    //     res.json(data);
    //   }
    // });
  } else {
    res.sendStatus(500);
  }
});

app.get('/ingred', (req, res) => {
  console.log(req, 'ingredient search request server line 104');
  db.searchIngreds(req.query.ingredient, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
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
