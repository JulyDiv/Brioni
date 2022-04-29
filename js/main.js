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
    1000: {
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
        dragSize: 300,
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

// Menu-overlay
var menuOverlay = $(".menu-overlay");
menuOverlay.on("click", function () {
  menuMobile.hide();
  menuOverlay.hide();
  modalThank.hide();
  modalContacts.hide();
  modalBacket.hide();
  menuClose.hide();
  menuButton.show();
  menuCostume.hide();
  menuAssortment.hide();
});

// Modal-overlay
var modalOverlay = $(".modal-overlay");
modalOverlay.on("click", function () {
  modalOverlay.hide();
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
  menuOverlay.show();
  menuMobile.show();
  menuClose.show();
  menuButton.hide();
});

// Кнопка закрытия меню
var menuClose = $(".menu-close");
menuClose.on("click", function () {
  menuOverlay.hide();
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
  menuOverlay.show();
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

// Стрелка вверх в аккордионе


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

// Кнопки сортировки в
var buttonFilter = $("[data-toggle='filter']");
var buttonSort320 = $("[data-toggle='sort']");
var blockColorSize = $(".character-media");
var blockSort = $(".character-sort");
buttonFilter.on("click", function () {
  blockColorSize.show();
});
buttonSort320.on("click", function () {
  blockSort.show();
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
  modalOverlay.show();
  modalBacket.show();
});
// Закрываем корзину
var closeBacket = $(".close-button");
closeBacket.click (function () {
  modalOverlay.hide();
  modalBacket.hide();
});

// Кнопка в корзине (окно контактной формы)
var buttonTotal = $(".bag-total__button");
var modalContacts = $(".contacts");
buttonTotal.click (function () {
  modalOverlay.show();
  modalContacts.show();
  modalBacket.hide();
});

// Закрываем окно контактной формы
var closeContact = $(".close-button");
closeContact.click (function () {
  modalOverlay.hide();
  modalContacts.hide();
});

// Кнопка в корзине (заполнение контактной формы)
var buttonContacts = $(".contacts-button");
var modalThank = $(".thank");
buttonContacts.click (function () {
  modalOverlay.show();
  modalThank.show();
  modalContacts.hide();
});

// Закрываем окно спасибо за покупку
var closeThank = $(".close-button");
closeThank.click (function () {
  modalOverlay.hide();
  modalThank.hide();
});

// Кнопка финиш (спасибо за покупку)
var buttonFinish = $(".thank__button");
buttonFinish.on("click", function () {
  modalOverlay.hide();
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

// Checkbox
var checkbox = $(".character-dropdown__checkbox");
var checkboxActive = $(".checkbox");
checkbox.on("click", function () {
  $(this).toggleClass("character-dropdown__checkbox--active");
  checkboxActive.toggleClass("checkbox--active");
});

// Переключение фото для просмотра в card-choice-1 (карточка товара)
$(".card-choice__image_1").on("click", function () {
  $(".card-main").css("background-image", "url(../img/card-choice-1.png)");
});
$(".card-choice__image_2").on("click", function () {
  $(".card-main").css("background-image", "url(../img/card-choice-2.png)");
});
$(".card-choice__image_3").on("click", function () {
  $(".card-main").css("background-image", "url(../img/card-choice-3.png)");
});
$(".card-choice__image_4").on("click", function () {
  $(".card-main").css("background-image", "url(../img/card-choice-4.png)");
});
$(".card-choice__image_5").on("click", function () {
  $(".card-main").css("background-image", "url(../img/card-choice-5.png)");
});

});















