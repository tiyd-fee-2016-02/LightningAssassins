$(function (){
  'use strict';

//LEFT ARROW ON NEW-APPT PAGE REDIRECTS TO MAIN PAGE
$('#back-button').on('click', function (){
  window.location = "main-page.html";
});

//LEFT ARROW ON EDIT-APPT PAGE REDIRECTS TO DETAIL PAGE
$('#back-button-two').on('click', function (){
  window.location = "detail.html";
});

//LEFT ARROW ON DETAIL PAGE REDIRECTS TO NEW-APPT PAGE
$('').on('click', function (){
  window.location = "new-appt.html";
});

//SAVE BUTTON ON NEW APPT PAGE REDIRECTS TO MAIN PAGE
$('#save-new-appointment').on('click', function (){
  window.location = "main-page.html";
});


//SAVE OR DELETE BUTTON ON EDIT APPT PAGE REDIRECTS TO DETAILS PAGE
$('.footerButtonHalf').on('click', function (){
  window.location = "detail.html";
});



});
