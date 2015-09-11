'use strict';

angular.module('myApp.craigwaite', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/craigwaite', {
        templateUrl: 'craigwaite/craigwaite.html',
        controller: 'CraigwaiteCtrl'
    });
}])

.controller('CraigwaiteCtrl', function ($scope) {
    $scope.pageClass = 'page-home';
});