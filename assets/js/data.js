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


  $saveNewAppointment.click(function(){
    $(':input', '.form-container').each(function(){
      // console.log(this.value);
    localStorage[$(this).attr('name')] = $(this).val();
        var appointment = $(this).val();
        console.log(appointment);

    if(appointment === '') {
      $('#alert').html("Please complete form");
     }
    else {
     $('.rightBox').prepend("<div>" + appointment + "</div>");
    //  delete the values in the current input
     var appointments = $('.rightBox').html();
      localStorage.setItem('appointment', appointment);
}
  //add local storage appointments
  // if(localStorage.getItem('appointment')) {
  // $('.appt-form').html(localStorage.getItem('appointment'));
  // }


});
});


}); // closes use strict
