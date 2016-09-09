"use strict";

app.controller("BoardNewCtrl", function($scope, $window, BoardStorage) {
  // $scope.title = "Create a New Board";
  // $scope.btnText = "Save New Board";

  $scope.newBoard = {
    title: "",
    description: "",
    uid: $scope.$parent.getUser()
  };

  $scope.addNewBoard = function() {

    BoardStorage.postNewBoard ($scope.newBoard)
    .then(function() {
      $window.location.href = "#/boards/home"; // rerouting back to list view after promise is returned
    });
  };


});