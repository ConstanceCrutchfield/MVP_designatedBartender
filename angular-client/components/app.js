angular.module('app')
  .controller('AppCtrl', function appCtrl(itemsService) {
    itemsService.getAll((data) => {
      // maybe reverse so new gets added to top
      this.items = data.slice(-5);
      console.log(this.items);
    });
    this.searchResults = function (input) {
      // search and rerender page add updateList to search as callback
      // rerender page with 5 from search
      itemsService.search(input);
    }.bind(this);
    this.updateList = function (items) {
      this.items = items;
    }.bind(this);
    this.featureItem = function (itemName) {
      itemsService.getIngreds(itemName)
        .then((response) => {
          // send response to listItem call?
          // update item with ingredient list
        });
    }.bind(this);
  })
  .component('app', {
    bindings: {
    },
    $onInit: () => {
      // app renders list before getting items back!
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
