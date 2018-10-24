angular.module('app')
  .component('listItem', {
    bindings: {
      item: '<',
      feature: '<',
    },
    controller() {
      this.onClick = () => {
        this.feature(this.item.cocktailName)
          .then((response) => {
            console.log(response, 'response to feature ingred');
            this.ingredients = response;
          })
          .catch((err) => {
            console.log(err);
          });
      };
    },
    templateUrl: '/templates/list-item.html',
  });
