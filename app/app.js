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
    // when('/items/list', {
    //   templateUrl: 'partials/item-list.html',
    //   controller: 'ItemListCtrl',
    //   resolve: {isAuth}
    // }).
    // when('/items/new', {
    //   templateUrl: 'partials/item-form.html',
    //   controller: 'ItemNewCtrl',
    //   resolve: {isAuth}
    // }).
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
