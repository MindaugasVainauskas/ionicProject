angular.module('starter.services', [])

.factory('Tasks', function() {
 var tasks = ['task1', 'task2', 'task3'];
 

  return {
      tasks: tasks
   
  };
});
