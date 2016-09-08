"use strict";

app.controller("PinListCtrl", function($scope, PinStorage, SearchTermData ) {

  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();

  PinStorage.getUserPins(user)
    .then((__itemCollectionArray__) => {
      $scope.pins = __itemCollectionArray__;
  });

  $scope.pinDelete = (pinId) => {
    PinStorage.deletePin(pinId)
    .then( (response) => {
      PinStorage.getUserPins(user)
      .then( (__itemCollectionArray__) => {
        $scope.pins = __itemCollectionArray__;
      });
    });
  };

});