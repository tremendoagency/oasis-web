(function($) {
  "use strict"; // Start of use strict

  // Preloader

  $(window).on('load', function () {
    $('body').removeClass('loading');
  });

  // Navigation

  var navigation = new Swiper('#navigation', {
    speed: 1000,
    direction: 'vertical',
    mousewheel: true,
    forceToAxis: true,
    hashNavigation:true
  });

  navigation.on('slideChangeTransitionStart', function () {
    invertNavbar();
  });

  function invertNavbar(){
    if ($('.swiper-slide-active').hasClass('invert-menu')){
      $('nav').addClass('inverted');
    }
    else{
        $('nav').removeClass('inverted');
    }
  }

  //Team
   
  var team = new Swiper('#team .swiper-container', {
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.mobile-navbar').removeClass('show');
  });

  $('#index .navbar-toggler').click(function() {
    $('.mobile-navbar').toggleClass('show');
    $('.navbar-toggler i').toggleClass('fa-times');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict
