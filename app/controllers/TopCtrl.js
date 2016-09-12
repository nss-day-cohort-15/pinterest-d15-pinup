"use strict";

app.controller("TopCtrl", function($scope, $location, $window, AuthFactory){
  $scope.isLoggedIn = false;
  $scope.currentBoardId = "";
  $scope.currentBoardTitle = "";
  let currentUser = null;

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      currentUser = user.uid;
      $scope.isLoggedIn = true;
      console.log("Current User loggin in?", user.uid);
      $scope.$apply();
    } else {
      currentUser = null;
      $scope.isLoggedIn = false;
      $window.location.href = "#/login";
    }
    $scope.$apply();
  });

  $scope.getUser = function() {
    return currentUser;
  };

  $scope.logout = function() {
    AuthFactory.logoutUser()
    .then(function(data){
      console.log("logged out", data);
      $window.location.href = "/";
    });
  };

});
