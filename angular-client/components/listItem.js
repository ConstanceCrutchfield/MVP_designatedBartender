angular.module('app')
  .component('listItem', {
    bindings: {
      item: '<',
    },
    controller() {

    },
    templateUrl: '/templates/list-item.html',
  });

// items must have option to add reviews
