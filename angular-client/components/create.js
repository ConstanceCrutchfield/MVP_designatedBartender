angular.module('app')
  .component('create', {
    bindings: {
    },
    controller(itemsService) {
      this.onClick = (input) => {
        console.log(input);
        itemsService.create(input);
      };
    },
    templateUrl: '/templates/create.html',
  });
