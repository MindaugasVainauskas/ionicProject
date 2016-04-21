angular.module('starter.controllers', [])

.controller('singleTaskViewCtrl', function($scope, $stateParams, Tasks) {      
    $scope.taskData = Tasks.taskData;
    $scope.addTask = Tasks.addTask;
    $scope.removeTask = Tasks.removeTask;
    
})

.controller('taskNamesListCtrl', function($scope, Tasks){      
    $scope.taskData = Tasks.taskData;
    $scope.addNewList = Tasks.addNewList;
    $scope.removeTaskList = Tasks.removeTaskList;
    $scope.setTaskId = Tasks.setTaskId;
});


