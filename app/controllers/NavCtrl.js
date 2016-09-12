"use strict";

app.controller("NavCtrl", function($scope, SearchTermData) {

  $( document ).ready(function() {
    //initialize materialized dropdown
    $(".dropdown-button").dropdown();
  });

  $scope.searchText = SearchTermData;

  // $('#search').change(function () {
  //   console.log(SearchTermData);
  // });

  $scope.logoutUser = () => {
    $scope.$parent.logout();
  };

});