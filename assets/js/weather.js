$(document).ready(function(){
  'use strict';

$.getJSON('http://api.wunderground.com/api/876afe8e97f036ff/conditions/q/NC/Raleigh.json')
   .done(function (data) {
      console.log(data.map(function () {
        return;
      }));
   });

  $.ajax({
  dataType: 'json',
  url: 'http://api.wunderground.com/api/876afe8e97f036ff/conditions/q/NC/Raleigh.json'
  method: 'GET',
}).done(function (data) {
  console.log(data.map(function () {
    return.login;
  }));
});


// $.ajax({
//   url: '/oldapi?callback=?',
//   type: 'GET',
//   timeout: 5000, // 5 second timeout
//   dataType: 'jsonp' // Tell jQuery we're doing JSONP
// })
// .done(function (data) {
//   console.log(data);
// });
//
//
//
// jQuery(document).ready(function($) {
//   $.ajax({
//   url : "http://api.wunderground.com/api/876afe8e97f036ff/conditions/q/NC/Raleigh.json",
//   dataType : "jsonp",
//   success : function(parsed_json) {
//   var location = parsed_json['location']['city'];
//   var temp_f = parsed_json['current_observation']['temp_f'];
//   alert("Current temperature in " + location + " is: " + temp_f);
//   }
//   });
// });
