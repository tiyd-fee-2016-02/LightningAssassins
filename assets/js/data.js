//--------LOCAL STORAGE STUFF--------//

$(function (){
  'use strict';

// TESTING LOCAL STORAGE //

// create a variable with an object
var hello = { 'one': 1, 'two': 2, 'three': 3 };

// add to local storage and turn into a string
localStorage.setItem('hello', JSON.stringify(hello));

// get from local storage
var printObject = localStorage.getItem('hello');

console.log(printObject);


// console.log('hello: ', JSON.parse(printObject));

$.each( hello, function( key, value ) {
  alert( key + ": " + value );
});








});
