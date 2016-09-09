"use strict";

app.controller("BoardListCtrl", function($scope, $window, BoardStorage) {

$scope.lolnewboard = function () {
  $window.location.href = "#/boards/new";
};

  let user = $scope.$parent.getUser();

  BoardStorage.getUserBoards(user)
    .then((boardListArray) => {
      console.log(boardListArray);
      $scope.boards = boardListArray;
  });

});