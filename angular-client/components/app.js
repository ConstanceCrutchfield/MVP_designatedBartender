angular.module('app')
  .controller('AppCtrl', function appCtrl(itemsService) {
    itemsService.getAll((data) => {
      // maybe reverse so new gets added to top
      this.items = data.slice(-6);
      console.log(this.items);
    });
    this.searchResults = (input) => {
      // search and rerender page add updateList to search as callback
      // rerender page with 5 from search
      Promise.resolve(itemsService.search(input))
      .then((res) => {
        console.log(res, 'data from search');
        this.updateList(res);
      });
    };
    this.updateList = (items) => {
      this.items = items;
    };
    this.featureItem = (itemName) => {
      // function that adds ingredient list to item
      itemsService.getIngreds(itemName)
        .then((response) => {
          // send response to listItem call?
          // update item with ingredient list or pop-up modal with ingredient list
        });
    };
  })
  .component('app', {
    bindings: {
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
