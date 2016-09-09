"use strict";

var app = angular.module("PinUp", ["ngRoute"])
.constant("FirebaseURL", "https://pinup-7471d.firebaseio.com/");


let isAuth = (AuthFactory) => new Promise((resolve, reject) =>{
  if(AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.config(function($routeProvider) {
  $routeProvider.

    //partial and controller for login, upon navigating to the home page
    when('/', {
      templateUrl:'partials/login.html',
      controller: 'LoginCtrl'
      // resolve: {isAuth}
    }).

    //P&C for login, upon navigating to 'login' page
    when('/login', {
      templateUrl:'partials/login.html',
      controller: 'LoginCtrl'
      // resolve: {isAuth}
    }).

    //P&C for individual board
    // when('/board/{{board.title}}', {
    //   templateUrl: 'partials/single-board.html',
    //   controller: 'BoardViewCtrl',
    //   resolve: {isAuth}
    // }).

    //P&C for user's board list
    when('/boards', {
      templateUrl: '/partials/board-list.html',
      controller: 'BoardListCtrl',
    //   resolve: {isAuth}
    }).

//need P&C's for new board, edit board, new pin, edit pin, pin view


    // when('/items/view/:itemId', {
    //   templateUrl: 'partials/item-details.html',
    //   controller: 'ItemViewCtrl',
    //   resolve: {isAuth}

    // }).
    // when('/items/view/:itemId/edit', {
    //   templateUrl: 'partials/item-form.html',
    //   controller: 'ItemEditCtrl',
    //   resolve: {isAuth}

    // }).
    otherwise('/login');
});

app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.AuthDomain
  };
  firebase.initializeApp(authConfig);
});
