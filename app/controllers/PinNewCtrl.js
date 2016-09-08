"use strict";

app.controller("PinNewCtrl", function($scope, $location, PinStorage) {
  $scope.title = "Create a New Pin";
  $scope.btnText = "Save New Pin";

  $scope.newPin = {
    title: "",
    description: "",
    image: "",
    boardid: "",
    uid: $scope.$parent.getUser()
  };

  $scope.addNewPin = function() {
    PinStorage.postNewPin ($scope.newPin)
    .then(function() {
      $location.url("__tbd__"); // rerouting back to list view after promise is returned
    });
  };

});
