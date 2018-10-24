angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
      image: '<',
    },
    controller() {

    },
    templateUrl: '/templates/list.html',
  });
