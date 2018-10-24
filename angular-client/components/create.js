angular.module('app')
  .component('create', {
    bindings: {
    },
    controller(itemsService) {
      this.newDrink = {};
      this.onClick = () => {
        console.log(this.newDrink, 'input from create form');
        itemsService.create(this.newDrink)
          .then(() => {
            this.newDrink = {};
          });
      };
    },
    templateUrl: '/templates/create.html',
  });
