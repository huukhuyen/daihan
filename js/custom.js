// Slide list
$(document).ready(function() {
  var owl = $("#owl-demo"),
    status = $("#owlStatus");
  owl.owlCarousel({
    navigation: true
  });
  $(".hot-img .owl-buttons").appendTo('.hot-img .title-section');

  // Menu responsive
  $(".toggle-menu").click(function() {
    $(this).next().slideToggle(300);
  });
  // Pin menu on top
  var $nav = $('.nav'),
    navPosition = $nav.offset().top;
  $(window).scroll(function() {
    $top = $(window).scrollTop();
    if ($top > navPosition) {
      $nav.addClass('sticky');
    } else {
      $nav.removeClass('sticky');
    }
  });
});

// Slide one header
$(function() {
  SyntaxHighlighter.all();
});
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider) {
      $('body').removeClass('loading');
    }
  });
});
