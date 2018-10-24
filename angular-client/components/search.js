angular.module('app')
  .component('search', {
    bindings: {
      // maybe this binding can re-render page after search?
      result: '<',
    },
    controller() {
      this.searched = {};
      this.onClick = () => {
        this.result(this.searched)
          .then(() => {
            this.searched = {};
          });
      };
    },
    templateUrl: '/templates/search.html',
  });
