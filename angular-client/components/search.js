angular.module('app')
  .component('search', {
    bindings: {
<<<<<<< HEAD
      item: '<',
    },
    controller() {

=======
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
>>>>>>> new-app
    },
    templateUrl: '/templates/search.html',
  });
