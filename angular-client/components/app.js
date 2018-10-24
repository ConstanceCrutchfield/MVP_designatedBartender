angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    itemsService.getAll((data) => {
      this.items = data;
      console.log(this.items);
    });
    this.image = 'https://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg';
    this.searchResults = function (input) {
      // search and rerender page add updateList to search as callback
      itemsService.search(input);
    }.bind(this);
    this.updateList = function (items) {
      this.items = items;
    }.bind(this);
  })
  .component('app', {
    bindings: {
      items: '<',
    },
    $onInit: () => {
      // app renders list before getting items back!
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
