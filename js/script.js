$(function () {
  "use strict";
  var wind = $(window);
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -60,
  });
  $(".nav a").on("click", function () {
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  });
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar-default"),
      h_hight = $(".header").outerHeight();
    if (bodyScroll > h_hight) {
      navbar.addClass("nav-scroll");
    } else {
      navbar.removeClass("nav-scroll");
    }
  });
  wind.on("scroll", function () {
    $(".skills-progress span").each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var myVal = $(this).attr("data-value");
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          width: myVal,
        });
      }
    });
  });
  $(".portfolio .link").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  $(".clients .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 500,
  });
  $(".blog .owl-carousel").owlCarousel({
    margin: 30,
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  wind.stellar();
  $(".numbers .counter").countUp({
    delay: 10,
    time: 1500,
  });
});
