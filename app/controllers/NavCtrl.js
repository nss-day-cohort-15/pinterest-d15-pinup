"use strict";

app.controller("NavCtrl", function($scope, SearchTermData) {
  $scope.searchText = SearchTermData;

  $( document ).ready(function() {
    //initialize materialized dropdown
    $(".dropdown-button").dropdown();
  });


  // $('#search').change(function () {
  //   console.log(SearchTermData);
  // });

  $scope.logoutUser = () => {
    $scope.$parent.logout();
  };

});
