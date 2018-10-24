angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
      feature: '<',
    },
    controller() {

    },
    templateUrl: '/templates/list.html',
  });
