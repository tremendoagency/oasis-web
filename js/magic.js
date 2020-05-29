(function($) {
  "use strict"; // Start of use strict

  // Preloader

  $(window).on('load', function () {
    setTimeout((function() {
      $('#loader').animate({ "opacity": "0" }, 1000, function(){
        $('#loader').remove();
      });
    }), 1000);
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

  $('#navbar-toggler').click(function() {
    $('#navbar').toggleClass('open');
    $('.mobile-navbar').toggleClass('show');
  });

  $('.slide-to').on( "click", function(event){
    event.preventDefault();
    navigation.slideTo($(this).attr('data-slide'));
    $('.mobile-navbar').removeClass('show');
    $('#navbar-toggler').removeClass('open');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict
