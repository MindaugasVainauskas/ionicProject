angular.module('starter.controllers', [])

.controller('singleTaskViewCtrl', function($scope, Tasks) {
    
    var taskData = {
        tasks: Tasks.taskList.tasks
    }
    
    function addTask(newTask){
        Tasks.addTask(newTask);        
    }
    
    function removeTask(task){
        Tasks.removeTask(task);
    }
    
    $scope.addTask = addTask;
    $scope.taskData = taskData;
    $scope.removeTask = removeTask;
    
})

.controller('taskNamesListCtrl', function($scope, Tasks){
    
});


