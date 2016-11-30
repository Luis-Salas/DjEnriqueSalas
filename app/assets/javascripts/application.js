// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require materialize-sprockets
jQuery(function ($) {
  $(document).ready(function(){
    $('.slider').slider({full_width: true});
    $('.parallax').parallax();
    $('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: false, // Does not change width of dropdown to that of the activator
     hover: false, // Activate on hover
     gutter: 0, // Spacing from edge
     belowOrigin: true, // Displays dropdown below the button
     alignment: 'left' // Displays dropdown with edge aligned to the left of button
   });
   $('.materialboxed').materialbox();
   $('.scrollspy').scrollSpy();
   $('.button-collapse').sideNav({
         menuWidth: 300, // Default is 240
         edge: 'left', // Choose the horizontal origin
         closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
         draggable: true // Choose whether you can drag to open on touch screens
       }
     );
  });
})
