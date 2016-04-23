angular.module('starter.controllers', [])

.controller('singleTaskViewCtrl', function($scope, Tasks) { 
    //function calls and variable gets passed up from factory
    $scope.taskData = Tasks.taskData;
    $scope.addTask = Tasks.addTask;
    $scope.removeTask = Tasks.removeTask;
    $scope.updateChecked = Tasks.updateChecked;
    $scope.setSubTaskId = Tasks.setSubTaskId;
    
})

.controller('taskNamesListCtrl', function($scope, Tasks){  
    //function calls and variable gets passed up from factory
    $scope.taskData = Tasks.taskData;
    $scope.addNewList = Tasks.addNewList;
    $scope.removeTaskList = Tasks.removeTaskList;
    $scope.setTaskId = Tasks.setTaskId;
});


