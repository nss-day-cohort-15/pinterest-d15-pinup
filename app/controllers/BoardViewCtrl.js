"use strict";

app.controller("BoardViewCtrl", function($scope, $location, $window, $routeParams, BoardStorage, PinStorage) {

  //array holds pins specific to this board
  $scope.boardPins = [];

  //every board has three columns,
  //these arrays each hold one third of the board's total pins
  $scope.boardPinsCol1 = [];
  $scope.boardPinsCol2 = [];
  $scope.boardPinsCol3 = [];


  //gets all pins associated with the current user
  PinStorage.getUserPins($scope.$parent.getUser())
  .then((PinListArray) => {

    //clear arrays
    $scope.boardPins = [];
    $scope.boardPinsCol1 = [];
    $scope.boardPinsCol2 = [];
    $scope.boardPinsCol3 = [];

    //puts all pins associated with current user into an array
    $.each(PinListArray, function (index, value) {
      if (value.boardid === $scope.$parent.currentBoardId) {
        $scope.boardPins.push(value);
      }
    });

    //sorts the array of user pins to three arrays, one for each column
    $.each($scope.boardPins, function (index, value) {
      if (index % 3 ===  0) {
        $scope.boardPinsCol1.push(value);
      } else if (index % 3 ===  1) {
        $scope.boardPinsCol2.push(value);
      } else if (index % 3 ===  2) {
        $scope.boardPinsCol3.push(value);
      }
    });
  });


  //delete pin using pin id, passed in from ng-click on partial
  $scope.pinDelete = function (pinid) {
    PinStorage.deletePin(pinid)
    .then( function () {
      PinStorage.getUserPins($scope.$parent.getUser())
      .then((PinListArray) => {

        //clear arrays
        $scope.boardPins = [];
        $scope.boardPinsCol1 = [];
        $scope.boardPinsCol2 = [];
        $scope.boardPinsCol3 = [];

        //puts all pins associated with current user into an array
        $.each(PinListArray, function (index, value) {
          if (value.boardid === $scope.$parent.currentBoardId) {
            $scope.boardPins.push(value);
          }
        });

        //sorts the array of user pins to three arrays, one for each column
        $.each($scope.boardPins, function (index, value) {
          if (index % 3 ===  0) {
            $scope.boardPinsCol1.push(value);
          } else if (index % 3 ===  1) {
            $scope.boardPinsCol2.push(value);
          } else if (index % 3 ===  2) {
            $scope.boardPinsCol3.push(value);
          }
        });
      });
    });
  };




// $('.materialboxed').materialbox();

  // $scope.thisboard = "";

  // BoardStorage.getUserBoards($scope.$parent.getUser())
  // .then((boardListArray) => {

  //   $.each(boardListArray, function (index, value) {
  //     if ($scope.$parent.currentBoard === value.id) {
  //       $scope.thisboard = value;
  //     }
  //   });
  // });

//console.log("thisbord", $scope.$parent.currentBoard);
 // created an array of a single item by filtering down to just the one ID from the item
 //    $scope.selectedItem = $scope.items.filter(function(item) {
 //      return item.id === $routeParams.itemId;
 //    })[0];  // placed the [0] here because after the array came back we need to access the array inside the object

});