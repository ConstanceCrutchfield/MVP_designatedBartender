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
          console.log(err, 'error getting /items');
        });
    };
    this.create = (params, callback) => {
      $http({
        method: 'post',
        url: '/create',
        params,
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

    this.search = (params, callback) => {
      $http({
        method: 'get',
        url: '/search',
        params,
      })
        .then(({ data }) => {
          // functionality in app.js to update view
          console.log(data, 'services search line 42');
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // this.addReview = (callback) => {
    //   $http({
    //     method: 'post',
    //     url: '/review',
    //     params: 'data from review form',
    //   })
    //     .then(({ data }) => {
    //       // functionality in app.js to update view
    //       // add new review to db
    //       if (callback) {
    //         callback(data);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  });
