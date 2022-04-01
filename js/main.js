var swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var swiper = new Swiper('.swiper2', {
  slidesPerView: 3,
  spaceBetween: 45,
  freeMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    dragSize: 400,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 40,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        dragSize: 400,
  },
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 40,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        dragSize: 200,
  },
    },
    320: {
      slidesPerView: 1,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        dragSize: 50,
  },
    }
  },

});

var swiper = new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 10,
  loop: true,

  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    dragSize: 50,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

$(document).ready(function () {

var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $(".menu-mobile").toggleClass("menu-mobile--visible");
});

var menuMobile = $(".menu-mobile--visible");
menuMobile.on(openMenu);

  function openMenu () {
    var mobileOverlay = $(".menu-mobile__overlay");
    mobileOverlay.addClass("menu-mobile__overlay--visible");
  }
  
});


















// var $select = $('.js-select'),
//   $dropdown = $('.js-dropdown'),
//   $checkbox = $('input[type=checkbox]'),
//   $icon = $('.js-icon'),
//   isOpen = false;

// var openSelection = function()  {
//   $dropdown.addClass('is-open');
//   isOpen = true;
// }

// var closeSelection = function() {
//   $dropdown.removeClass('is-open');
//   isOpen = false;
// }

// $checkbox.on('click', function(e) {
//   console.log('click');
// });

// $select.each(function(button, wrap) {
//   var $wrap = $(wrap);
  
//   $wrap.on('click', function() {
//     isOpen ? closeSelection() : openSelection();
//   });
// });