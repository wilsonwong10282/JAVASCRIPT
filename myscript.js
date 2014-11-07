$(document).ready(function(){
  

  $('.item').hide();
  $('.thing').show(); // show only works on elements with CSS rule of display: none

  $('.thing').fadeIn(3000);
  $('h1').fadeOut(5000);
  $('p').animate({opacity: 0.2}, 3000);
  $('button').click( function(){
  $('h1').fadeIn(5000);
  });

});