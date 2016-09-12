"use strict";

app.controller("NavCtrl", function($scope ) {

  $( document ).ready(function() {
    //initialize materialized dropdown
    $(".dropdown-button").dropdown();
  });

  $scope.logoutUser = () => {
    $scope.$parent.logout();
  };

});