

// create the module and name it apptApp
var apptApp = angular.module('apptApp', []);

apptApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'THIS WORKS, I HOPE';
  });

// ;function(){
//   angular.module('apptApp', ['ngRoute'], function($routeProvider){
//     $routeProvider
//         .when('/', {
//           templateUrl: '/main-page.html'
//         })
//   });
// }
    //
    // apptApp.config(function($routeProvider){
    //   $routeProvider
    //     .when('/', {
    //       templateUrl: '/main-page.html'
    //     })
    // });
