angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
      image: '<',
    },
    controller() {
      console.log(this.items, 'list items');
    },
    templateUrl: '/templates/list.html',
  });
