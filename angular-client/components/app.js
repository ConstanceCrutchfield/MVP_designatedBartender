angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    itemsService.getAll((data) => {
      this.items = data;
    });
    this.image = 'https://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg';
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
