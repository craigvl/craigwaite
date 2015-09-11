'use strict';

angular.module('myApp.skills', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/skills', {
        templateUrl: 'skills/skills.html',
        controller: 'SkillsCtrl'
    });
}])

.controller('SkillsCtrl', function ($scope) {
    $scope.pageClass = 'page-skills';
});