// Generated by CoffeeScript 1.6.3
$(document).ready(function() {});

$(window).scroll(function() {
  if ($(this).scrollTop() > 395 && $("#header").not(".scrollheader")) {
    $("#header").addClass("growtop scrollheader");
  }
  if ($(this).scrollTop() < 395 && $("#header").is(".scrollheader")) {
    $("#header").removeClass("growtop scrollheader");
  }
  return true;
});
