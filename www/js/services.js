angular.module('starter.services', [])

.factory('Tasks', function($rootScope) {    
    //main variable encapsulating the list of objects that hold title, checked status and list of subtasks
    var taskData ={ 
         taskId: 0,
         subTaskId: 0,
         taskList:[]
    }
    
     //parse the saved object from JSON array to be able to use it
    taskData = JSON.parse(localStorage.getItem("tasks"));
    
    //add new task list with list title and an array to hold associated tasks
    function addNewList(title){
        //add new task list
        taskData.taskList.push({title: title, tasks: [] });       
        localStorage.setItem("tasks",JSON.stringify(taskData));
    }
    
    //set up the taskId for later use inside the application
    function setTaskId(index){
        //set up taskId variable
        taskData.taskId = index;        
    }
 
    //add new subtask to list
    function addTask(newTask){          
        //add new task to existing list
        taskData.taskList[taskData.taskId].tasks.push({isChecked: false, task: newTask});
        
        //save the updated list in local storage
        localStorage.setItem("tasks",JSON.stringify(taskData));
    }
    
    //set subtask Id for checkbox updates
     function setSubTaskId(subIndex){
        taskData.subTaskId = subIndex;
    }
    
    //remove selected subtask from the list
    function removeTask(task){
        //remove selected task from the list
        taskData.taskList[taskData.taskId].tasks.splice(taskData.taskList[taskData.taskId].tasks.indexOf(task), 1);
        //update local storage to reflect it
         localStorage.setItem("tasks",JSON.stringify(taskData));
    }
    
    //remove selected task list
    function removeTaskList(title){
        //remove selected task from the list
        taskData.taskList.splice(taskData.taskList.indexOf(title), 1);
        //update local storage to reflect it
         localStorage.setItem("tasks",JSON.stringify(taskData));
    } 
   
    
    //update checked property inside taskList object
    function updateChecked(){
       
            if(taskData.taskList[taskData.taskId].tasks[taskData.subTaskId].isChecked === false){                
                taskData.taskList[taskData.taskId].tasks[taskData.subTaskId].isChecked = true;              
            }else if(taskData.taskList[taskData.taskId].tasks[taskData.subTaskId].isChecked === true){
                taskData.taskList[taskData.taskId].tasks[taskData.subTaskId].isChecked = false;                
            }           
        
        console.log(taskData.taskList[taskData.taskId].tasks[taskData.subTaskId].isChecked);
        //update local storage to reflect this change
         localStorage.setItem("tasks",JSON.stringify(taskData));
    }
  
    
  return {      
      addTask: addTask,
      removeTask: removeTask,
      addNewList: addNewList,
      taskData: taskData,
      removeTaskList: removeTaskList,
      setTaskId: setTaskId,
      updateChecked: updateChecked,
      setSubTaskId: setSubTaskId
  };
});
