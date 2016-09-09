"use strict";

app.controller("BoardListCtrl", function($scope, BoardStorage) {

  $scope.title = "";
  $scope.desc = "";
  $scope.uid = "";

  // let user = $scope.$parent.getUser();

  // BoardStorage.getUserBoard(user)
  //   .then((__itemCollectionArray__) => {
  //     $scope.boards = __itemCollectionArray__;
  // });

  BoardStorage.getSingleBoard("-KREf80FdpdxfAISqCU5")
  .then( function (arg) {

    $scope.title = arg.title;
    $scope.desc = arg.description;
    $scope.uid = arg.uid;

  });


});