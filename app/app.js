'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.craigwaite',
  'myApp.skills',
  'myApp.version',
  'ngAnimate'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/craigwaite'
    });
}]);