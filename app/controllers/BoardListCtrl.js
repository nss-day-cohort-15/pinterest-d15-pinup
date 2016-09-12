"use strict";

app.controller("BoardListCtrl", function($scope, $window, $routeParams, BoardStorage, PinStorage, FirebaseURL) {

  //define user for use in this scope
  //comes from the logged in user's uid property
  let user = $scope.$parent.getUser();

  //retrieve the 'boards' with uid property equal to user
  //this populates the page via the ng-repeat being linked to 'board in boards'
  //boards is defined here via $scope.boards
  BoardStorage.getUserBoards(user)
  .then((boardListArray) => {
    //should have a return here?
    $scope.boards = boardListArray;
  });

  //navigate to the new board partial on 'add new' button click
  $scope.lolnewboard = function () {
    $window.location.href = "#/boards/new";
  };

  $scope.boardEdit = function (boardid) {

    $window.location.href = `#/boards/edit/${boardid}`;
  };


  //delete a board using ng-click and the board id being passed in via the
  //data attr in the partial
  $scope.boardDelete = function (boardid) {
    BoardStorage.deleteBoard(boardid)
    .then( () => {
      //reload page
      BoardStorage.getUserBoards(user)

      .then((boardListArray) => {
        $scope.boards = boardListArray;
      });
    });

  };

//--there probably is a better way to have done this--
  //navigate to the 'single-board' partial using the board's id
  $scope.goToBoard = function (boardid, boardtitle) {
    $scope.$parent.currentBoardId = boardid;
    $scope.$parent.currentBoardTitle = boardtitle;
    $window.location.href = `#/boards/${boardid}`;
  };

});