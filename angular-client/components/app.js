angular.module('app')
  .controller('AppCtrl', function appCtrl(itemsService) {
    this.updateList = () => {
      // attempting to reuse this function
      itemsService.getAll((data) => {
        // maybe reverse so new gets added to top
        this.items = data.slice(-6).reverse();
        console.log(this.items);
      });
    };
    this.searchResults = (input) => {
      // search and rerender page add updateList to search as callback
      // rerender page with 5 from search
      itemsService.search(input, (response) => {
        console.log(response.data, 'data from search, new items app.js line 12');
        if (response.data.length) {
          setTimeout(() => {
            this.updateList();
          }, 1500);
        }
      });
    };
    this.featureItem = (itemName) => {
      // function that adds ingredient list to item
      itemsService.getIngreds(itemName)
        .then((response) => {
          // send response to listItem call?
          // update item with ingredient list or pop-up modal with ingredient list
        });
    };
    this.$onInit = () => {
      this.updateList();
    };
  })
  .component('app', {
    bindings: {
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
