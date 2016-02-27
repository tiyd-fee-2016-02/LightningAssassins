//--------LOCAL STORAGE CODE --------//

$(function (){
  'use strict';

// TESTING LOCAL STORAGE //

// create a variable with an object
// var hello = { 'one': 1, 'two': 2, 'three': 3 };

// add to local storage and turn into a string
// localStorage.setItem('hello', JSON.stringify(hello));

// get from local storage
// var printObject = localStorage.getItem('hello');

// prints object
// console.log(printObject);

// converts string back to an object
// console.log('hello: ', JSON.parse(printObject));

// iterates through the object and grabs each key and value pair
// $.each( hello, function( key, value ) {
//   alert( key + ": " + value );
// });

//-------FORM SUBMIT CODE---------//

var $saveNewAppointment = $('#save-new-appointment');
var $allForm = {};

  $saveNewAppointment.click(function(){
    $(':input', '.form-container').each(function(){
      // console.log(this.value);
    localStorage[$(this).attr('name')] = $(this).val();
      // console.log(this.value)
    });
  });


    // if($(".form-container").val() == '') {
      // $('#alert').html("Please complete form");
      // $('#alert').fadeIn().delay(1000).fadeOut();
        // return false;
    //  }
     //add to the main-page
    //  $('.rightBox').prepend("<div>" + inputValues + "</div>");
     //delete the values in the current input
    //  $(".appt-form")[0].reset();
    //  var appointments = $('.rightBox').html();
    //   localStorage.setItem('appointments', appointments);
    //   return false;

  //add local storage appointments
  // if(localStorage.getItem('appointments')) {
  // $('.appt-form').html(localStorage.getItem('appointments'));
  // }

//clear after 7 days

// $('#clear').click( function() {
// window.localStorage.clear();
// location.reload();
// return false;
// });



}); // closes use strict
