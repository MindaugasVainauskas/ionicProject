
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

 
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  
  .state('tab.taskNamesList', {
    url: '/taskNamesList',
    views: {
      'tab-taskNamesList': {
        templateUrl: 'templates/tab-taskNamesList.html',
        controller: 'taskNamesListCtrl'
      }
    }
  })

  // subtask view that gets loaded when task title is clicked in main view
  .state('tab.singleTaskView', {
    url: '/taskNamesList/:taskId',
    views: {
      'tab-taskNamesList': {
        templateUrl: 'templates/tab-singleTaskView.html',
        controller: 'singleTaskViewCtrl'
      }
    }
  })
  
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/taskNamesList');

});
