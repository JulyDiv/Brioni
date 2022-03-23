var swiper = new Swiper('.swiper', {
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
});

// if (window.matchMedia("(max-width: 640px)").swiper2) {
//   slidesPerView: 2,
//   spaceBetween: 45,
//   freeMode: true,
// };















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