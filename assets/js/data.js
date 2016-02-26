//--------LOCAL STORAGE CODE --------//

$(function (){
  'use strict';

// TESTING LOCAL STORAGE //

// create a variable with an object
var hello = { 'one': 1, 'two': 2, 'three': 3 };

// add to local storage and turn into a string
localStorage.setItem('hello', JSON.stringify(hello));

// get from local storage
var printObject = localStorage.getItem('hello');

// prints object
// console.log(printObject);

// converts string back to an object
console.log('hello: ', JSON.parse(printObject));

// iterates through the object and grabs each key and value pair
$.each( hello, function( key, value ) {
  // alert( key + ": " + value );
});








});
