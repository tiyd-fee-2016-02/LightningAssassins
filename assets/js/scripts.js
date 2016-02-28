//-------- PAGE REDIRECTS CODE -------- //

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

//PLUS BUTTON ON DETAIL PAGE REDIRECTS TO MAIN PAGE
$('#detail-return-main').on('click', function (){
  window.location = "main-page.html";
});

//SAVE BUTTON ON NEW APPT PAGE REDIRECTS TO MAIN PAGE
// $('#save-new-appointment').on('click', function (){
//   window.location = "main-page.html";
// });

//SAVE OR DELETE BUTTON ON EDIT APPT PAGE REDIRECTS TO DETAILS PAGE
$('.footerButtonHalf').on('click', function (){
  window.location = "detail.html";
});

//EDIT BUTTON ON DETAILS PAGE REDIRECTS TO EDIT-APPT PAGE
$('#editAppointment').on('click', function (){
  window.location = "edit-appt.html";
});

//PLUS BUTTON ON MAIN PAGE REDIRECTS TO NEW-APPT PAGE
$('#addAppointmentButton').on('click', function (){
  window.location = "new-appt.html";
});

//DELETE BUTTON ON EDIT APPT PAGE TO TRIGGER MODAL
$("#delete-edit-appt").click (function(){
  $(".modalContainer").addClass("deleteModal");
});

$(".cancelDelete").click(function(){
  $(".modalContainer").removeClass("deleteModal");
});

$(".confirmDelete").click(function(){
  window.location = "main-page.html";
});


});
