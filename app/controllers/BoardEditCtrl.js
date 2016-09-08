"use strict";

app.controller("BoardEditCtrl", function($scope, $location, $routeParams, BoardStorage ) {
  $scope.title = "Edit Board";
  $scope.btnText = "Save Changes";
  $scope.newBoard = {};


  $scope.addNewBoard = () => {
    BoardStorage.updateBoard($routeParams.boardId, $scope.newBoard)
    .then( (response) => {
      $location.url("__tbd__");
    });
  };

});