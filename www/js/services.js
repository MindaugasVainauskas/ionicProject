angular.module('starter.services', [])

.factory('Tasks', function() {
    var taskList ={
         tasks: []
    }
 
    function addTask(newTask){        
        taskList.tasks.push(newTask);
    }
    
 

  return {
      taskList: taskList,
      addTask: addTask   
  };
});
