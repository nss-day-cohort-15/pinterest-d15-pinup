"use strict";

app.controller("BoardViewCtrl", function($scope, BoardStorage, $routeParams ) {

  BoardStorage.getUserBoard($scope.$parent.getUser())
  .then( (__itemCollectionArray__) => {
    $scope.boards = __itemCollectionArray__;

// created an array of a single item by filtering down to just the one ID from the item
    $scope.selectedItem = $scope.items.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];  // placed the [0] here because after the array came back we need to access the array inside the object
  });

});