

// create the module and name it apptApp
var apptApp = angular.module('apptApp', ['ngRoute']);


apptApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', { //main page
                templateUrl : 'main-page.html',
            }) //plus sign on main page
            .when('/AddNewAppointment',  {
                templateUrl : 'new-appt.html',
            }) // < button on new appt page
            .when('/Main', {
                templateUrl : 'main-page.html',
            })
            .when('/Details', {
                templateUrl : 'detail.html',
            })
            .when('/Edit', {
                templateUrl : 'edit-appt.html',
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
