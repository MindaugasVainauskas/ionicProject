angular.module('starter.services', [])

.factory('Tasks', function() {
    var taskList ={
         tasks: []
    }
 
    function addTask(newTask){        
        taskList.tasks.push(newTask);
    }
    
    function removeTask(task){
        taskList.tasks.splice(taskList.tasks.indexOf(task), 1);
    }
    
 

  return {
      taskList: taskList,
      addTask: addTask,
      removeTask: removeTask
  };
});
