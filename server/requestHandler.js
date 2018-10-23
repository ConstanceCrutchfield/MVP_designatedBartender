const axios = require('axios');

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
