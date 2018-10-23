angular.module('app')
// all requests from user to server here!
// also user to database??

  .service('itemsService', function itemsService($http) {
    this.getAll = (callback) => {
      $http.get('/items')
        .then(({ data }) => {
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    this.create = (callback) => {
      $http({
        method: 'post',
        url: '/create',
        params: 'data from createDrink form',
      })
        .then(({ data }) => {
          // functionality in app.js to update view
          // add new item to db
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    this.search = (callback) => {
      $http({
        method: 'get',
        url: '/search',
        params: 'data from createDrink form',
      })
        .then(({ data }) => {
          // functionality in app.js to update view
          // add new item to db
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    this.addReview = (callback) => {
      $http({
        method: 'post',
        url: '/review',
        params: 'data from createDrink form',
      })
        .then(({ data }) => {
          // functionality in app.js to update view
          // add new item to db
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });
