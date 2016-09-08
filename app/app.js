
"use strict";

var app = angular.module("PinUp", ["ngRoute"])
.constant("FirebaseURL", "https://ng-todo-demo-8f298.firebaseio.com/");

// let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
//   if (AuthFactory.isAuthenticated()) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// app.config(function($routeProvider) {
//   $routeProvider.
//     when('/', {
//       templateUrl: 'partials/login.html',
//       controller: 'LoginCtrl'

//     }).
//     when('/login', {
//       templateUrl: 'partials/login.html',
//       controller: 'LoginCtrl'

//     }).
//     when('/items/list', {
//       templateUrl: 'partials/item-list.html',
//       controller: 'ItemListCtrl',

//     }).
//     when('/items/new', {
//       templateUrl: 'partials/item-form.html',
//       controller: 'ItemNewCtrl'

//       }).
//       when('/items/view/:itemId', {
//         templateUrl: 'partials/item-details.html',
//         controller: 'ItemViewCtrl'

//       }).
//       otherwise('/');
// });

