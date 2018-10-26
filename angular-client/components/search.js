angular.module('app')
  .component('search', {
    bindings: {
      // maybe this binding can re-render page after search?
      result: '<',
    },
    controller() {
      this.searched = {};
      this.onClick = () => {
        Promise.resolve(this.result(this.searched))
        .then(() => {
          // clear forms
          this.searched.ingredient = '';
          this.searched.cocktailName = '';
        });
        
      };
    },
    templateUrl: '/templates/search.html',
  });
