angular.module('starter.services', [])

.factory('Tasks', function($rootScope) {
    var taskList ={
         tasks: []
    }
 
    function addTask(newTask){      
        //add new task to existing list
        taskList.tasks.push(newTask);
        //save the updated list in local storage
        localStorage.setItem("tasks",JSON.stringify(taskList));
    }
    
    function removeTask(task){
        //remove selected task from the list
        taskList.tasks.splice(taskList.tasks.indexOf(task), 1);
        //update local storage to reflect it
         localStorage.setItem("tasks",JSON.stringify(taskList));
    }
    
 
   //parse the saved object from JSON array to be able to use it
    var taskList = JSON.parse(localStorage.getItem("tasks"));
    
  return {
      taskList: taskList,
      addTask: addTask,
      removeTask: removeTask
  };
});
