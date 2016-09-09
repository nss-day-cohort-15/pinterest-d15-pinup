"use strict";

app.controller("PinNewCtrl", function($scope, $window, PinStorage) {
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
      $window.location.href = "#/boards/home"; // rerouting back to list view after promise is returned
    });
  };

});
