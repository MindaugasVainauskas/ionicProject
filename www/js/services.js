angular.module('starter.services', [])

.factory('Tasks', function($rootScope) {
    
    
    var taskData ={ 
         taskId: 0,
         taskList:[]
    }
    
     //parse the saved object from JSON array to be able to use it
    taskData = JSON.parse(localStorage.getItem("tasks"));
    
    //add new task list with list title and an array to hold associated tasks
    function addNewList(title){
        
        taskData.taskList.push({title: title, tasks: [] });       
        localStorage.setItem("tasks",JSON.stringify(taskData));
    }
    
    function setTaskId(index){
        taskData.taskId = index;        
    }
 
    function addTask(newTask){          
        //add new task to existing list
        taskData.taskList[taskData.taskId].tasks.push(newTask);
        
        //save the updated list in local storage
        localStorage.setItem("tasks",JSON.stringify(taskData));
    }
    
    function removeTask(task){
        //remove selected task from the list
        taskData.taskList[taskData.taskId].tasks.splice(taskData.taskList[taskData.taskId].tasks.indexOf(task), 1);
        //update local storage to reflect it
         localStorage.setItem("tasks",JSON.stringify(taskData));
    }
    
    function removeTaskList(title){
        //remove selected task from the list
        taskData.taskList.splice(taskData.taskList.indexOf(title), 1);
        //update local storage to reflect it
         localStorage.setItem("tasks",JSON.stringify(taskData));
    }
    
    function getTaskList(taskId){
        for(var i = 0; i<taskData.taskList.length; i++){
            if(taskData.taskId === parseInt(taskId)){
                return taskData.taskList[i];
            }
        }
    }
    
 
  
    
  return {      
      addTask: addTask,
      removeTask: removeTask,
      addNewList: addNewList,
      taskData: taskData,
      removeTaskList: removeTaskList,
      setTaskId: setTaskId,
      getTaskList: getTaskList
  };
});
