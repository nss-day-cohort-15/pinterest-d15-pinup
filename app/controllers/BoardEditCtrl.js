"use strict";

app.controller("BoardEditCtrl", function($scope, $location, $routeParams, BoardStorage ) {

  BoardStorage.getSingleBoard($routeParams.boardeditid)
  .then( (response) => {
    $scope.newBoard = response;
    $scope.header = $scope.newBoard.title;
  });

  $scope.addNewBoard = () => {
    BoardStorage.updateBoard($routeParams.boardeditid, $scope.newBoard)
    .then( (response) => {
      $location.url('/boards/home');
    });
  };

});