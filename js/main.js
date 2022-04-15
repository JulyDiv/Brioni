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
    dragSize: 365,
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

// Preloader
// var preloader = $(".preloader");
//   setTimeout (function() {
//   preloader.addClass("preloader--hidden");
//   }, 6000);

// Overlay
var overlay = $(".overlay");
overlay.on("click", function () {
  menuMobile.hide();
  overlay.hide();
  modalThank.hide();
  modalContacts.hide();
  modalBacket.hide();
  menuClose.hide();
  menuButton.show();
  menuCostume.hide();
  menuAssortment.hide();
});

// Кнопка меню
var menuButton = $(".navbar-button");
var menuMobile = $(".menu-mobile");
menuButton.on("click", function () {
  overlay.show();
  menuMobile.show();
  menuClose.show();
  menuButton.hide();
});

// Кнопка закрытия меню
var menuClose = $(".menu-close");
menuClose.on("click", function () {
  overlay.hide();
  menuMobile.hide();
  menuAssortment.hide();
  menuButton.show();
  menuClose.hide();
  menuCostume.hide();
});

// Меню ассортимент
var linkAssortment = $(".menu-mobile__link-top");
var menuAssortment = $(".menu-assortment");
linkAssortment.on("click", function () {
  menuAssortment.show();
  menuMobile.hide();
  menuClose.show();
  menuButton.hide();
});

// Кнопка возврата назад в меню
var prevAssortment = $(".menu-assortment__button");
prevAssortment.on("click", function () {
  overlay.show();
  menuAssortment.hide();
  menuMobile.show();
});

// Аккордион
var buttonAcc = $(".menu-assortment__item");
var menuCostume = $(".menu-costume");
buttonAcc.on("click", function () {
  menuCostume.not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(1000);
});

  // Кнопка выбор цвета в каталоге
var buttonColor = $("[data-button='color']");
buttonColor.on("click", function () {
  $("[data-character='color']").toggleClass("character-dropdown--visible");
});

// Кнопка выбор размера в каталоге
var buttonSize = $("[data-button='size']");
buttonSize.on("click", function () {
  $("[data-character='size']").toggleClass("character-dropdown--visible");
});

// Кнопка сортировки
var buttonSort = $("[data-button='sort']");
buttonSort.on("click", function () {
  $("[data-character='sort']").toggleClass("character-dropdown--visible");
});

// Поиск
var linkSearch = $("[data-toggle='search']");
var modalSearch = $(".search");
linkSearch.on("click", function () {
  modalSearch.show();
});
// Закрыть поиск
var closeSearch = $(".search-button");
closeSearch.on("click", function () {
modalSearch.hide();
});

// Корзина
var linkBacket = $("[data-toggle='backet']");
var modalBacket = $(".bag");
linkBacket.on("click", function () {
  overlay.show();
  modalBacket.show();
});
// Закрываем корзину
var closeBacket = $(".close-button");
closeBacket.click (function () {
  overlay.hide();
  modalBacket.hide();
});

// Кнопка в корзине (окно контактной формы)
var buttonTotal = $(".bag-total__button");
var modalContacts = $(".contacts");
buttonTotal.click (function () {
  overlay.show();
  modalContacts.show();
  modalBacket.hide();
});

// Закрываем окно контактной формы
var closeContact = $(".close-button");
closeContact.click (function () {
  overlay.hide();
  modalContacts.hide();
});

// Кнопка в корзине (заполнение контактной формы)
var buttonContacts = $(".contacts-button");
var modalThank = $(".thank");
buttonContacts.click (function () {
  overlay.show();
  modalThank.show();
  modalContacts.hide();
});

// Закрываем окно спасибо за покупку
var closeThank = $(".close-button");
closeThank.click (function () {
  overlay.hide();
  modalThank.hide();
});

// Кнопка финиш (спасибо за покупку)
var buttonFinish = $(".thank__button");
buttonFinish.on("click", function () {
  overlay.hide();
  modalThank.hide();
  modalContacts.hide();
  modalBacket.hide();
});

// События активных элементов

// Footer form
var formFooter = $(".footer-form__image--grey");
var inputFooter = $(".footer-form__input");
inputFooter.on("click", function () {
  formFooter.show();
});

// Добавление в избранное
var selectIcon = $(".catalog-assortment__icon");
var activeIcon = $(".catalog-assortment__icon--active");
selectIcon.on("click", function () {
  activeIcon.show();
  $(this).hide();
});
activeIcon.on("click", function () {
  selectIcon.show();
  $(this).hide();
});

// В корзине что-то лежит (ярлычок на иконке)

// Checkbox
// Можно сделать так, но не отменяется действие
// var checkbox = $(".character-dropdown__checkbox");
// var checkboxActive = $(".checkbox--active");
// checkbox.on("click", function () {
//   $(this).css("background-color", "#000");
//   checkboxActive.show();
// });

// Checkbox
var checkbox = $(".character-dropdown__checkbox");
var checkboxActive = $(".checkbox");
checkbox.on("click", function () {
  $(this).toggleClass("character-dropdown__checkbox--active");
  checkboxActive.toggleClass("checkbox--active");
});







































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