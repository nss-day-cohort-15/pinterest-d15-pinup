"use strict";

app.controller("PinEditCtrl", function($scope, $location, $routeParams, PinStorage ) {
  $scope.title = "Edit Pin";
  $scope.btnText = "Save Changes";
  $scope.newPin = {};


  $scope.addNewPin = () => {
    PinStorage.updatePin($routeParams.pinId, $scope.newPin)
    .then( (response) => {
      $location.url("____tbd___");
    });
  };

});