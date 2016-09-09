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
    when('/', {
      templateUrl:'partials/login.html',
      controller: 'LoginCtrl'
      // resolve: {isAuth}
    }).
    when('/login', {
      templateUrl:'partials/login.html',
      controller: 'LoginCtrl'
      // resolve: {isAuth}
    }).

    when('/pins/newpin', {
      templateUrl: 'partials/new-pin.html',
      controller: 'PinNewCtrl'
      // resolve: {isAuth}
    }).
    // when('/items/new', {
    //   templateUrl: 'partials/item-form.html',
    //   controller: 'ItemNewCtrl',
    //   resolve: {isAuth}
    // }).
    when('/pins/pinView/', {
      templateUrl: 'partials/single-pin.html',
      controller: 'PinViewCtrl'
      // resolve: {isAuth}
    }).
    when('/boards/single', {
      templateUrl: 'partials/single-board.html',
      controller: 'BoardViewCtrl',
    //   resolve: {isAuth}
    }).
    when('/boards/home', {
      templateUrl: '/partials/board-list.html',
      controller: 'BoardListCtrl'
    //   resolve: {isAuth}
    }).
    when('/boards/new', {
      templateUrl: '/partials/new-board.html',
      controller: 'BoardNewCtrl'
    //   resolve: {isAuth}
    }).


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
