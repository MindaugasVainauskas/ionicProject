angular.module('starter.controllers', [])

.controller('startMenuCtrl', function($scope, Tasks) {
    
    var taskData = {
        tasks: Tasks.taskList.tasks
    }
    
    function addTask(newTask){
        Tasks.addTask(newTask);
        console.log(newTask);
    }
    
    $scope.addTask = addTask;
    $scope.taskData = taskData;
    
});


