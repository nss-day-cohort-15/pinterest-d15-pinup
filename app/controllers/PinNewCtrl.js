"use strict";

app.controller("PinNewCtrl", function($scope, $window, PinStorage, BoardStorage) {
  $scope.title = "Create a New Pin";
  $scope.btnText = "Save New Pin";

  //variable to hold logged in user's id
  let user = $scope.$parent.getUser();

  //variable to hold the board that chosen via the select input
    //gets its value via ng-model in the partial
  $scope.selectedBoard = null;

  //initiate materialize select
  $(document).ready(function() {
      $('select').material_select();
  });


 //initiate newPin variable on $scope
    //Its properties 'title', 'description' and 'image' are given value via ng-model on the partial
    //Its property 'boardid' will be set when the user changes the select input
    //Its property 'uid' is given value from the user variable, set on line 8
  $scope.newPin = {
    title: "",
    description: "",
    image: "",
    boardid: "",
    uid: user
  };

  //get all user's boards for the select dropdown
  BoardStorage.getUserBoards(user)
  .then((boardListArray) => {
    $scope.boards = boardListArray;

    //reinitialize this, because we are dynamically adding dropdown values
    $(document).ready(function() {
        $('select').material_select();
    });
  });

  //take the $scope.newPin object and pass it as an argument to the postNewPin function in PinFactory.js
  $scope.addNewPin = function() {
    $scope.newPin.boardid = $scope.selectedBoard;
    console.log($scope.newPin);
    PinStorage.postNewPin ($scope.newPin)
    .then(function() {
      $window.location.href = "#/boards/home"; // rerouting back to list view after promise is returned
    });
  };

});
