"use strict";

var swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var swiper = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 45,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    dragSize: 365,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        dragSize: 400,
      },
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        dragSize: 300,
      },
    },
    320: {
      slidesPerView: 1,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        dragSize: 50,
      },
    },
  },
});

var swiper = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 10,
  loop: true,

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    dragSize: 50,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// JS

// Preloader
// var preloader = document.querySelector(".preloader");
//   setTimeout (function() {
//   preloader.classList.add("preloader--hidden");
//   }, 6000);

const menuOverlay = document.querySelector(".menu-overlay"),
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
  linkSelect = document.querySelector(".icon__select"),
  linkUser = document.querySelector(".icon__user"),
  linkBacket = document.querySelector(".icon__backet"),
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
  checkboxActiveContacts = document.querySelector(".contacts-checkbox__input--active");

// Menu-overlay
menuOverlay.addEventListener("click", function () {
  menuMobile.classList.remove("menu-mobile--visibile");
  menuOverlay.classList.toggle("menu-overlay--visibile");
  modalThank.classList.toggle("thank--hidden");
  modalContacts.classList.toggle("contacts--hidden");
  modalBacket.classList.toggle("bag--hidden");
  menuClose.classList.toggle("menu-close--visibile");
  menuButton.classList.remove("navbar-button--hidden");
  menuCostume.classList.toggle("menu-costume--hidden");
  menuAssortment.classList.remove("menu-assortment--visibile");
});

// Modal-overlay
modalOverlay.addEventListener("click", function () {
  modalOverlay.classList.remove("modal-overlay--visibile");
  modalThank.classList.toggle("thank--hidden");
  modalContacts.classList.remove("contacts--visibile");
  modalBacket.classList.remove("bag--visibile");
  menuClose.classList.toggle("menu-close--hidden");
  menuButton.classList.toggle("navbar-button--visibile");
  menuCostume.classList.toggle("menu-costume--hidden");
  menuAssortment.classList.toggle("menu-assortment--hidden");
});

// Кнопка меню
menuButton.addEventListener("click", function () {
  menuMobile.classList.toggle("menu-mobile--visibile");
  menuOverlay.classList.toggle("menu-overlay--visibile");
  menuClose.classList.toggle("menu-close--visibile");
  menuButton.classList.toggle("navbar-button--hidden");
});

// Кнопка закрытия меню
menuClose.addEventListener("click", function () {
  menuOverlay.classList.toggle("menu-overlay--visibile");
  menuMobile.classList.remove("menu-mobile--visibile");
  menuAssortment.classList.remove("menu-assortment--visibile");
  menuButton.classList.toggle("navbar-button--hidden");
  menuClose.classList.remove("menu-close--visibile");
  // menuCostume.hide();
});

// Меню ассортимент
linkAssortment.addEventListener("click", function () {
  menuAssortment.classList.toggle("menu-assortment--visibile");
  menuMobile.classList.toggle("menu-mobile--visibile");
});

// Кнопка возврата назад в меню
prevAssortment.addEventListener("click", function () {
  menuAssortment.classList.remove("menu-assortment--visibile");
  menuMobile.classList.toggle("menu-mobile--visibile");
});

// Аккордион - this еще не проходила в js
// buttonAcc.addEventListener('click', function () {
//   menuCostume.not($(this).next()).slideUp(1000);
//   $(this).next().slideToggle(1000);
// });

// Кнопка выбор цвета в каталоге
if (buttonColor) {
  buttonColor.addEventListener("click", function () {
    characterDropdownColor.classList.toggle("character-dropdown--visible");
    characterDropdownSize.classList.remove("character-dropdown--visible");
    characterDropdownSort.classList.remove("character-dropdown--visible");
  });
}

// Кнопка выбор размера в каталоге
if (buttonSize) {
  buttonSize.addEventListener("click", function () {
    characterDropdownSize.classList.toggle("character-dropdown--visible");
    characterDropdownColor.classList.remove("character-dropdown--visible");
    characterDropdownSort.classList.remove("character-dropdown--visible");
  });
}

// Кнопка сортировки
if (buttonSize) {
  buttonSort.addEventListener("click", function () {
    characterDropdownSort.classList.toggle("character-dropdown--visible");
    characterDropdownSize.classList.remove("character-dropdown--visible");
    characterDropdownColor.classList.remove("character-dropdown--visible");
  });
}

// Кнопки сортировки в mobile
if (buttonFilter) {
  buttonFilter.addEventListener("click", function () {
    blockColorSize.classList.toggle("character-media--visibile");
    blockSort.classList.remove("character-media--visibile");
  });
}
if (buttonSort320) {
  buttonSort320.addEventListener("click", function () {
    blockSort.classList.toggle("character-media--visibile");
    blockColorSize.classList.remove("character-media--visibile");
  });
}

// Поиск
linkSearch.addEventListener("click", function () {
  modalSearch.classList.toggle("search--visibile");
});
// Закрыть поиск
closeSearch.addEventListener("click", function () {
  modalSearch.classList.toggle("search--visibile");
});

// Корзина
linkBacket.addEventListener("click", function () {
  modalOverlay.classList.toggle("modal-overlay--visibile");
  modalBacket.classList.toggle("bag--visibile");
});
// Закрываем корзину
closeBacket.addEventListener("click", function () {
  modalOverlay.classList.remove("modal-overlay--visibile");
  modalBacket.classList.remove("bag--visibile");
});

// Кнопка в корзине (окно контактной формы)
buttonTotal.addEventListener("click", function () {
  modalContacts.classList.toggle("contacts--visibile");
  modalBacket.classList.remove("bag--visibile");
});

// Закрываем окно контактной формы
closeContact.addEventListener("click", function () {
  modalOverlay.classList.remove("modal-overlay--visibile");
  modalContacts.classList.remove("contacts--visibile");
});

// Кнопка в корзине (заполнение контактной формы)
buttonContacts.addEventListener("click", function () {
  modalThank.classList.toggle("thank--visibile");
  modalContacts.classList.remove("contacts--visibile");
});

// Закрываем окно спасибо за покупку
closeThank.addEventListener("click", function () {
  modalThank.classList.remove("thank--visibile");
  modalOverlay.classList.remove("modal-overlay--visibile");
});

// Кнопка финиш (спасибо за покупку)
buttonFinish.addEventListener("click", function () {
  modalOverlay.classList.remove("modal-overlay--visibile");
  modalThank.classList.remove("thank--visibile");
  modalContacts.classList.remove("contacts--visibile");
  modalBacket.classList.remove("bag--visibile");
});

// События активных элементов

// Footer form
var footerFormImage = document.querySelector(".footer-form__image");
var footerFormImageGrey = document.querySelector(".footer-form__image--grey");

var clickInputActive = function () {
  footerFormImageGrey.classList.add("footer-form__image--grey_active");
};
var clickInput = function () {
  footerFormImageGrey.classList.remove("footer-form__image--grey_active");
};

inputFooter.addEventListener("mouseenter", clickInputActive);
inputFooter.addEventListener("mouseleave", clickInput);

// Checkbox character-dropdown (выбор цвета, размера, сортировка)
// var checkboxClick = function () {
//   checkbox.classList.toggle("character-dropdown__checkbox--active");
//   checkboxActive.classList.toggle("checkbox--active");
// };
// checkbox.addEventListener('click', checkboxClick);

// Checkbox contacts
checkboxContacts.addEventListener("click", function () {
  checkboxContacts.classList.toggle("contacts-checkbox__input--active");
});

// Переключение фото для просмотра в card-choice-1 (карточка товара)
document.querySelector(".card-choice__image_1").addEventListener('click', function() {
  document.querySelector(".card-main").style.backgroundImage = "url(img/card-choice-1.png)";
});
document.querySelector(".card-choice__image_2").addEventListener('click', function() {
  document.querySelector(".card-main").style.backgroundImage = "url(img/card-choice-2.png)";
});
document
  .querySelector(".card-choice__image_3")
  .addEventListener("click", function () {
    document.querySelector(".card-main").style.backgroundImage =
      "url(img/card-choice-3.png)";
  });
document
  .querySelector(".card-choice__image_4")
  .addEventListener("click", function () {
    document.querySelector(".card-main").style.backgroundImage =
      "url(img/card-choice-4.png)";
  });
document
  .querySelector(".card-choice__image_5")
  .addEventListener("click", function () {
    document.querySelector(".card-main").style.backgroundImage =
      "url(img/card-choice-5.png)";
  });

// MenuButton hover
var menuLine = document.querySelectorAll(".navbar-button__line");
var clickLineActive = function () {
  menuLine[0].classList.add("navbar-button__line--active");
  menuLine[1].classList.add("navbar-button__line--active");
  menuLine[2].classList.add("navbar-button__line--active");
};
var clickLine = function () {
  menuLine[0].classList.remove("navbar-button__line--active");
  menuLine[1].classList.remove("navbar-button__line--active");
  menuLine[2].classList.remove("navbar-button__line--active");
};
menuButton.addEventListener("mouseenter", clickLineActive);
menuButton.addEventListener("mouseleave", clickLine);

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
