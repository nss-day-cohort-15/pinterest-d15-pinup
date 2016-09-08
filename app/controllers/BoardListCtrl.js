"use strict";

app.controller("BoardListCtrl", function($scope, BoardStorage) {

  let user = $scope.$parent.getUser();

  BoardStorage.getUserBoard(user)
    .then((__itemCollectionArray__) => {
      $scope.boards = __itemCollectionArray__;
  });

});