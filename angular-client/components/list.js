angular.module('app')
  .component('list', {
    bindings: {
      items: '<',
      feature: '<',
    },
    controller() {
      console.log(this.items);
    },
    templateUrl: '/templates/list.html',
  });
