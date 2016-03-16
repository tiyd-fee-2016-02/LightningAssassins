

// create the module and name it apptApp
var apptApp = angular.module('apptApp', ['ngRoute']);


apptApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'main-page.html',
            })
          });

//   ;(function(){
//     angular.module('apptApp', ['ngRoute'], function($routeProvider){
//     $routeProvider
//         .when('/', {
//           templateUrl: 'main-page.html'
//         }) //closes when
//     }); //closes function
// }// closes IIFE


apptApp.controller('mainController', function($scope) {
    console.log("this works?")
    // create a message to display in our view
    $scope.message = 'THIS WORKS, I HOPE';
  });
