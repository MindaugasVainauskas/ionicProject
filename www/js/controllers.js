angular.module('starter.controllers', [])

.controller('startMenuCtrl', function($scope, Tasks) {
    $scope.tasks = Tasks.tasks;
});


