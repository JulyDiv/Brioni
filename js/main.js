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

// JS

'use strict';

// Preloader
// var preloader = document.querySelector(".preloader");
//   setTimeout (function() {
//   preloader.classList.add("preloader--hidden");
//   }, 6000);

var menuOverlay = document.querySelector(".menu-overlay"),
    modalOverlay = document.querySelector(".modal-overlay"),
    menuButton = document.querySelector(".navbar-button"),
    menuClose = document.querySelector(".menu-close"),
    menuMobile = document.querySelector(".menu-mobile"),
    linkAssortment = document.querySelector(".menu-mobile__link-top"),
    menuAssortment = document.querySelector(".menu-assortment"),
    prevAssortment = document.querySelector(".menu-assortment__button"),
    buttonAcc = document.querySelector(".menu-assortment__item"),
    menuCostume = document.querySelector(".menu-costume"),
    buttonColor = document.querySelector("[data-button='color']"),
    buttonSize = document.querySelector("[data-button='size']"),
    buttonSort = document.querySelector("[data-button='sort']"),
    closeSearch = document.querySelector(".search-button"),
    buttonFilter = document.querySelector("[data-toggle='filter']"),
    buttonSort320 = document.querySelector("[data-toggle='sort']"),
    blockColorSize = document.querySelector(".character-media"),
    blockSort = document.querySelector(".character-sort"),
    linkSearch = document.querySelector("[data-toggle='search']"),
    linkSearchActive = document.querySelector(".icon__search-hover"),
    linkSelect = document.querySelector(".icon__select"),
    linkSelectActive = document.querySelector(".icon__select-hover"),
    linkUser = document.querySelector(".icon__user"),
    linkUserActive = document.querySelector(".icon__user-hover"),
    linkBacket = document.querySelector(".icon__backet"),
    linkBacketActive = document.querySelector(".icon__backet-hover"),
    modalSearch = document.querySelector(".search"),
    checkbox = document.querySelectorAll(".character-dropdown__checkbox"),
    checkboxActive = document.querySelectorAll(".checkbox"),
    formFooter = document.querySelector(".footer-form__image--grey"),
    inputFooter = document.querySelector(".footer-form__input"),
    buttonFinish = document.querySelector(".thank__button"),
    closeThank = document.querySelector(".thank-block__button"),
    buttonContacts = document.querySelector(".contacts-button"),
    modalThank = document.querySelector(".thank"),
    closeContact = document.querySelector(".contacts-title__button"),
    buttonTotal = document.querySelector(".bag-total__button"),
    modalContacts = document.querySelector(".contacts"),
    closeBacket = document.querySelector(".bag-title__button"),
    modalBacket = document.querySelector(".bag"),
    characterDropdownColor = document.querySelector(".character-dropdown__color"),
    characterDropdownSize = document.querySelector(".character-dropdown__size"),
    characterDropdownSort = document.querySelector(".character-dropdown__sort"),
    checkboxContacts = document.querySelector(".contacts-checkbox__input"),
    checkboxActiveContacts = document.querySelector(".contacts-checkbox__input--active"),
    linkBacket = document.querySelector("[data-toggle='backet']");

// Menu-overlay
menuOverlay.addEventListener('click', function () {
  menuMobile.classList.remove('menu-mobile--visibile');
  menuOverlay.classList.toggle('menu-overlay--visibile');
  modalThank.classList.toggle('thank--hidden');
  modalContacts.classList.toggle('contacts--hidden');
  modalBacket.classList.toggle('bag--hidden');
  menuClose.classList.toggle('menu-close--visibile');
  menuButton.classList.remove('navbar-button--hidden');
  menuCostume.classList.toggle('menu-costume--hidden');
  menuAssortment.classList.remove('menu-assortment--visibile');
});

// Modal-overlay
modalOverlay.addEventListener('click', function () {
  modalOverlay.classList.remove('modal-overlay--visibile');
  modalThank.classList.toggle('thank--hidden');
  modalContacts.classList.remove('contacts--visibile');
  modalBacket.classList.remove('bag--visibile');
  menuClose.classList.toggle('menu-close--hidden');
  menuButton.classList.toggle('navbar-button--visibile');
  menuCostume.classList.toggle('menu-costume--hidden');
  menuAssortment.classList.toggle('menu-assortment--hidden');
});

// Кнопка меню
menuButton.addEventListener('click', function () {
  menuMobile.classList.toggle('menu-mobile--visibile');
  menuOverlay.classList.toggle('menu-overlay--visibile');
  menuClose.classList.toggle('menu-close--visibile');
  menuButton.classList.toggle('navbar-button--hidden');
});

// Кнопка закрытия меню
menuClose.addEventListener('click', function () {
  menuOverlay.classList.toggle('menu-overlay--visibile');
  menuMobile.classList.remove('menu-mobile--visibile');
  menuAssortment.classList.remove('menu-assortment--visibile');
  menuButton.classList.toggle('navbar-button--hidden');
  menuClose.classList.remove('menu-close--visibile');
  // menuCostume.hide();
});

// Меню ассортимент
linkAssortment.addEventListener('click', function () {
  menuAssortment.classList.toggle('menu-assortment--visibile');
  menuMobile.classList.toggle('menu-mobile--visibile');
});

// Кнопка возврата назад в меню
prevAssortment.addEventListener('click', function () {
  menuAssortment.classList.remove('menu-assortment--visibile');
  menuMobile.classList.toggle('menu-mobile--visibile');
});

// Аккордион - this еще не проходила в js
// buttonAcc.addEventListener('click', function () {
//   menuCostume.not($(this).next()).slideUp(1000);
//   $(this).next().slideToggle(1000);
// });

// Стрелка вверх в аккордионе

// Кнопка выбор цвета в каталоге
buttonColor.addEventListener('click', function () {
  characterDropdownColor.classList.toggle("character-dropdown--visible");
});

// Кнопка выбор размера в каталоге
buttonSize.addEventListener('click', function () {
  characterDropdownSize.classList.toggle("character-dropdown--visible");
});

// Кнопка сортировки
buttonSort.addEventListener('click', function () {
  characterDropdownSort.classList.toggle("character-dropdown--visible");
});

// Кнопки сортировки в mobile
buttonFilter.addEventListener('click', function () {
  blockColorSize.classList.toggle("character-media--visibile");
  blockSort.classList.remove("character-media--visibile");
});
buttonSort320.addEventListener('click', function () {
  blockSort.classList.toggle("character-media--visibile");
  blockColorSize.classList.remove("character-media--visibile");
});

// Поиск
linkSearchActive.addEventListener('click', function () {
  modalSearch.classList.toggle("search--visibile");
});
// Закрыть поиск
closeSearch.addEventListener('click', function () {
  modalSearch.classList.toggle("search--visibile");
});

// Корзина
linkBacketActive.addEventListener('click', function () {
  modalOverlay.classList.toggle("modal-overlay--visibile");
  modalBacket.classList.toggle("bag--visibile");
});
// Закрываем корзину
closeBacket.addEventListener('click', function () {
  modalOverlay.classList.remove("modal-overlay--visibile");
  modalBacket.classList.remove("bag--visibile");
});

// Кнопка в корзине (окно контактной формы)
buttonTotal.addEventListener('click', function () {
  modalContacts.classList.toggle("contacts--visibile");
  modalBacket.classList.remove("bag--visibile");
});

// Закрываем окно контактной формы
closeContact.addEventListener('click', function () {
  modalOverlay.classList.remove("modal-overlay--visibile");
  modalContacts.classList.remove("contacts--visibile");
});

// Кнопка в корзине (заполнение контактной формы)
buttonContacts.addEventListener('click', function () {
  modalThank.classList.toggle("thank--visibile");
  modalContacts.classList.remove("contacts--visibile");
});

// Закрываем окно спасибо за покупку
closeThank.addEventListener('click', function () {
  modalThank.classList.remove("thank--visibile");
  modalOverlay.classList.remove("modal-overlay--visibile");
});

// Кнопка финиш (спасибо за покупку)
buttonFinish.addEventListener('click', function () {
  modalOverlay.classList.remove("modal-overlay--visibile");
  modalThank.classList.remove("thank--visibile");
  modalContacts.classList.remove("contacts--visibile");
  modalBacket.classList.remove("bag--visibile");
});

// События активных элементов

// Footer form
var footerFormImage = document.querySelector('.footer-form__image');
var footerFormImageGrey = document.querySelector('.footer-form__image--grey');

var clickInputActive = function () {
  footerFormImageGrey.classList.add('footer-form__image--grey_active');
};
var clickInput = function () {
  footerFormImageGrey.classList.remove('footer-form__image--grey_active');
};

inputFooter.addEventListener('mouseenter', clickInputActive);
inputFooter.addEventListener('mouseleave', clickInput);

// Checkbox character-dropdown (выбор цвета, размера, сортировка)
// var checkboxClick = function () {
//   checkbox.classList.toggle("character-dropdown__checkbox--active");
//   checkboxActive.classList.toggle("checkbox--active");
// };
// checkbox.addEventListener('click', checkboxClick);

// Checkbox contacts
checkboxContacts.addEventListener('click', function () {
  checkboxContacts.classList.toggle("contacts-checkbox__input--active");
});

// Переключение фото для просмотра в card-choice-1 (карточка товара)
// document.querySelector(".card-choice__image_1").addEventListener('click', function() {
//   document.querySelector(".card-main").style.backgroundImage = "url(../img/card-choice-1.png)";
// });
// document.querySelector(".card-choice__image_2").addEventListener('click', function() {
//   document.querySelector(".card-main").style.backgroundImage = "url(../img/card-choice-2.png)";
// });

// MenuButton hover
var menuLine = document.querySelectorAll('.navbar-button__line');
var clickLineActive = function () {
  menuLine[0].classList.add('navbar-button__line--active');
  menuLine[1].classList.add('navbar-button__line--active');
  menuLine[2].classList.add('navbar-button__line--active');
};
var clickLine = function () {
  menuLine[0].classList.remove('navbar-button__line--active');
  menuLine[1].classList.remove('navbar-button__line--active');
  menuLine[2].classList.remove('navbar-button__line--active');
};
menuButton.addEventListener('mouseenter', clickLineActive);
menuButton.addEventListener('mouseleave', clickLine);

// Search hover
var clickSearchActive = function () {
  linkSearch.classList.add('icon__search--hidden');
  linkSearch.classList.remove('icon__search');
  linkSearchActive.classList.remove('icon__search-hover');
  linkSearchActive.classList.add('icon__search-hover--active');
};
var clickSearch = function () {
  linkSearch.classList.remove('icon__search--hidden');
  linkSearch.classList.remove('icon__search--active');
  linkSearch.classList.add('icon__search');
  linkSearchActive.classList.remove('icon__search-hover--active');
  linkSearchActive.classList.add('icon__search-hover');
};
linkSearch.addEventListener('mouseenter', clickSearchActive);
linkSearch.addEventListener('mouseleave', clickSearch);

// Select hover
var clickSelectActive = function () {
  linkSelect.classList.add('icon__select--hidden');
  linkSelect.classList.remove('icon__select');
  linkSelectActive.classList.remove('icon__select-hover');
  linkSelectActive.classList.add('icon__select-hover--active');
};
var clickSelect = function () {
  linkSelect.classList.remove('icon__select--hidden');
  linkSelect.classList.remove('icon__select--active');
  linkSelect.classList.add('icon__select');
  linkSelectActive.classList.remove('icon__select-hover--active');
  linkSelectActive.classList.add('icon__select-hover');
};
linkSelect.addEventListener('mouseenter', clickSelectActive);
linkSelect.addEventListener('mouseleave', clickSelect);

// User hover
var clickUserActive = function () {
  linkUser.classList.add('icon__user--hidden');
  linkUser.classList.remove('icon__user');
  linkUserActive.classList.remove('icon__user-hover');
  linkUserActive.classList.add('icon__user-hover--active');
};
var clickUser = function () {
  linkUser.classList.remove('icon__user--hidden');
  linkUser.classList.remove('icon__user--active');
  linkUser.classList.add('icon__user');
  linkUserActive.classList.remove('icon__user-hover--active');
  linkUserActive.classList.add('icon__user-hover');
};
linkUser.addEventListener('mouseenter', clickUserActive);
linkUser.addEventListener('mouseleave', clickUser);

// Backet hover
var clickBacketActive = function () {
  linkBacket.classList.add('icon__backet--hidden');
  linkBacket.classList.remove('icon__backet');
  linkBacketActive.classList.remove('icon__backet-hover');
  linkBacketActive.classList.add('icon__backet-hover--active');
};
var clickBacket = function () {
  linkBacket.classList.remove('icon__backet--hidden');
  linkBacket.classList.remove('icon__backet--active');
  linkBacket.classList.add('icon__backet');
  linkBacketActive.classList.remove('icon__backet-hover--active');
  linkBacketActive.classList.add('icon__backet-hover');
};
linkBacket.addEventListener('mouseenter', clickBacketActive);
linkBacket.addEventListener('mouseleave', clickBacket);

// $(".card-choice__image_1").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-1.png)");
// });
// $(".card-choice__image_2").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-2.png)");
// });
// $(".card-choice__image_3").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-3.png)");
// });
// $(".card-choice__image_4").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-4.png)");
// });
// $(".card-choice__image_5").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-5.png)");
// });

// jQuery
// $(document).ready(function () {

// Preloader
// var preloader = $(".preloader");
//   setTimeout (function() {
//   preloader.addClass("preloader--hidden");
//   }, 6000);

// Menu-overlay
// var menuOverlay = $(".menu-overlay");
// menuOverlay.on("click", function () {
//   menuMobile.hide();
//   menuOverlay.hide();
//   modalThank.hide();
//   modalContacts.hide();
//   modalBacket.hide();
//   menuClose.hide();
//   menuButton.show();
//   menuCostume.hide();
//   menuAssortment.hide();
// });

// Modal-overlay
// var modalOverlay = $(".modal-overlay");
// modalOverlay.on("click", function () {
//   modalOverlay.hide();
//   modalThank.hide();
//   modalContacts.hide();
//   modalBacket.hide();
//   menuClose.hide();
//   menuButton.show();
//   menuCostume.hide();
//   menuAssortment.hide();
// });

// Кнопка меню
// var menuButton = $(".navbar-button");
// var menuMobile = $(".menu-mobile");
// menuButton.on("click", function () {
//   menuOverlay.show();
//   menuMobile.show();
//   menuClose.show();
//   menuButton.hide();
// });

// Кнопка закрытия меню
// var menuClose = $(".menu-close");
// menuClose.on("click", function () {
//   menuOverlay.hide();
//   menuMobile.hide();
//   menuAssortment.hide();
//   menuButton.show();
//   menuClose.hide();
//   menuCostume.hide();
// });

// Меню ассортимент
// var linkAssortment = $(".menu-mobile__link-top");
// var menuAssortment = $(".menu-assortment");
// linkAssortment.on("click", function () {
//   menuAssortment.show();
//   menuMobile.hide();
//   menuClose.show();
//   menuButton.hide();
// });

// Кнопка возврата назад в меню
// var prevAssortment = $(".menu-assortment__button");
// prevAssortment.on("click", function () {
//   menuOverlay.show();
//   menuAssortment.hide();
//   menuMobile.show();
// });

// Аккордион
// var buttonAcc = $(".menu-assortment__item");
// var menuCostume = $(".menu-costume");
// buttonAcc.on("click", function () {
//   menuCostume.not($(this).next()).slideUp(1000);
//   $(this).next().slideToggle(1000);
// });

// Стрелка вверх в аккордионе


// Кнопка выбор цвета в каталоге
// var buttonColor = $("[data-button='color']");
// buttonColor.on("click", function () {
//   $("[data-character='color']").toggleClass("character-dropdown--visible");
// });

// Кнопка выбор размера в каталоге
// var buttonSize = $("[data-button='size']");
// buttonSize.on("click", function () {
//   $("[data-character='size']").toggleClass("character-dropdown--visible");
// });

// Кнопка сортировки
// var buttonSort = $("[data-button='sort']");
// buttonSort.on("click", function () {
//   $("[data-character='sort']").toggleClass("character-dropdown--visible");
// });

// Кнопки сортировки в mobile
// var buttonFilter = $("[data-toggle='filter']");
// var buttonSort320 = $("[data-toggle='sort']");
// var blockColorSize = $(".character-media");
// var blockSort = $(".character-sort");
// buttonFilter.on("click", function () {
//   blockColorSize.show();
// });
// buttonSort320.on("click", function () {
//   blockSort.show();
// });

// Поиск
// var linkSearch = $("[data-toggle='search']");
// var modalSearch = $(".search");
// linkSearch.on("click", function () {
//   modalSearch.show();
// });
// Закрыть поиск
// var closeSearch = $(".search-button");
// closeSearch.on("click", function () {
// modalSearch.hide();
// });

// Корзина
// var linkBacket = $("[data-toggle='backet']");
// var modalBacket = $(".bag");
// linkBacket.on("click", function () {
//   modalOverlay.show();
//   modalBacket.show();
// });
// Закрываем корзину
// var closeBacket = $(".close-button");
// closeBacket.click (function () {
//   modalOverlay.hide();
//   modalBacket.hide();
// });

// Кнопка в корзине (окно контактной формы)
// var buttonTotal = $(".bag-total__button");
// var modalContacts = $(".contacts");
// buttonTotal.click (function () {
//   modalOverlay.show();
//   modalContacts.show();
//   modalBacket.hide();
// });

// Закрываем окно контактной формы
// var closeContact = $(".close-button");
// closeContact.click (function () {
//   modalOverlay.hide();
//   modalContacts.hide();
// });

// Кнопка в корзине (заполнение контактной формы)
// var buttonContacts = $(".contacts-button");
// var modalThank = $(".thank");
// buttonContacts.click (function () {
//   modalOverlay.show();
//   modalThank.show();
//   modalContacts.hide();
// });

// Закрываем окно спасибо за покупку
// var closeThank = $(".close-button");
// closeThank.click (function () {
//   modalOverlay.hide();
//   modalThank.hide();
// });

// Кнопка финиш (спасибо за покупку)
// var buttonFinish = $(".thank__button");
// buttonFinish.on("click", function () {
//   modalOverlay.hide();
//   modalThank.hide();
//   modalContacts.hide();
//   modalBacket.hide();
// });

// События активных элементов

// Footer form
// var formFooter = $(".footer-form__image--grey");
// var inputFooter = $(".footer-form__input");
// inputFooter.on("click", function () {
//   formFooter.show();
// });

// Checkbox
// var checkbox = $(".character-dropdown__checkbox");
// var checkboxActive = $(".checkbox");
// checkbox.on("click", function () {
//   $(this).toggleClass("character-dropdown__checkbox--active");
//   checkboxActive.toggleClass("checkbox--active");
// });

// Переключение фото для просмотра в card-choice-1 (карточка товара)
// $(".card-choice__image_1").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-1.png)");
// });
// $(".card-choice__image_2").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-2.png)");
// });
// $(".card-choice__image_3").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-3.png)");
// });
// $(".card-choice__image_4").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-4.png)");
// });
// $(".card-choice__image_5").on("click", function () {
//   $(".card-main").css("background-image", "url(../img/card-choice-5.png)");
// });

// });















