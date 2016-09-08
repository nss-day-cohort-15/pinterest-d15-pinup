"use strict";

app.controller("BoardNewCtrl", function($scope, $location, BoardStorage) {
  $scope.title = "Create a New Board";
  $scope.btnText = "Save New Board";

  $scope.newBoard = {
    title: "",
    description: "",
    uid: $scope.$parent.getUser()
  };

  $scope.addNewBoard = function() {
    BoardStorage.postNewBoard ($scope.newBoard)
    .then(function() {
      $location.url("__tbd__"); // rerouting back to list view after promise is returned
    });
  };


});