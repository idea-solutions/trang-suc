const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var slider = document.querySelector(".slider-size");
var sliderSize = document.querySelector(".slider-size");
var arrayImgs = [
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
  "./img/img-silder/3.png",
];

var listDeal = document.querySelector(".list-items");
var arrayDeal = [
  {
    img: "./img/img-list/1.webp",
    name: "Trâm cài",
    amount: 4,
  },
  {
    img: "./img/img-list/2.webp",
    name: "Bông tai",
    amount: 22,
  },
  {
    img: "./img/img-list/3.webp",
    name: "Vòng cổ",
    amount: 4,
  },
  {
    img: "./img/img-list/1.webp",
    name: "Nhẫn",
    amount: 6,
  },
];
function render() {
  var htmlsSlide = arrayImgs
    .map((img) => {
      return `
        <img src="${img}" class="slider__img" alt="">
        `;
    })
    .join(" ");
  sliderSize.innerHTML = htmlsSlide;

  var htmlsItem = arrayDeal
    .map((item) => {
      return `
        <div class="list-item">
        <img  class="list-item__img" src="${item.img}" alt="${item.name}">
        <span class="list-item__name">${item.name}</span>
        <small class="list-item__amount">${item.amount} sản phẩm</small>
         </div>
        `;
    })
    .join(" ");
  listDeal.innerHTML = htmlsItem;
}
// Slider
render();
var sliderImgs = document.querySelectorAll(".slider__img");
var nextSlide = document.querySelector(".slider__next");
var prevSlide = document.querySelector(".slider__prev");

// ---
const media = [
  window.matchMedia("(min-width:64rem"),
  window.matchMedia("(min-width:42.375rem) and (max-width:63.938rem"),
  window.matchMedia("(max-width:42.25rem"),
  window.matchMedia("(max-width:25.813rem"),
];
if (media[0].matches) {
  makeSile(5, slider, sliderSize, sliderImgs, nextSlide, prevSlide);
}
if (media[1].matches) {
  makeSile(2, slider, sliderSize, sliderImgs, nextSlide, prevSlide);
}
if (media[2].matches) {
  makeSile(0, slider, sliderSize, sliderImgs, nextSlide, prevSlide);
}
if (media[3].matches) {
}
function makeSile(amountSilde, parent, parentSize, itemAll, next, prev) {
  const widthItemAndMargin = parent.offsetWidth / amountSilde;
  const widthImgAll = widthItemAndMargin * itemAll.length;
  parentSize.style.width = `${widthImgAll}px`;
  parentSize.style.height = "200px";
  itemAll.forEach((img, index) => {
    img.style.marginRight = "10px";
    img.style.width = `${widthItemAndMargin - 10}px`;
  });

  let count = 0;
  let spacing = widthImgAll - widthItemAndMargin * amountSilde;

  next.addEventListener("click", function () {
    count += widthItemAndMargin;
    if (count > spacing) {
      count = 0;
      parentSize.style.transition = "all .7s ease-out";
    }
    parentSize.style.transform = `translateX(${-count}px)`;
  });
  prev.addEventListener("click", function () {
    count -= widthItemAndMargin;
    if (count < 0) {
      count = spacing;
      parentSize.style.transition = "all .7s ease-out";
    }
    parentSize.style.transform = `translateX(${-count}px)`;
  });

  if (parent == slider) {
    setInterval(() => {
      count += widthItemAndMargin;
      if (count > spacing) {
        count = 0;
      } else {
        parentSize.style.transform = `translateX(${-count}px)`;
      }
    }, 700);
  }
}
var sliderItems = document.querySelector(".slider-items");
var sliderItemSize = document.querySelector(".slider-item");
var sliderItemAll = document.querySelectorAll(".slider-item__link");
var sliderItemNext = document.querySelector(".slider-item-next");
var sliderItemPrev = document.querySelector(".slider-item-prev");

function makeSliderItem(amountSilde, parent, parentSize, itemAll, next, prev) {
  var widthAndMarginOneItem = parent.offsetWidth / amountSilde;
  var widthItemAll = widthAndMarginOneItem * itemAll.length;
  parentSize.style.width = `${widthItemAll}px`;
  if (sliderItems == parent) {
    itemAll.forEach((item) => {
      item.style.margin = "10px";
      item.style.width = `${widthAndMarginOneItem - 20}px`;
    });
  }
  //    margin: 0 150px 0px 0px; */

  if (customer == parent) {
    itemAll.forEach((item) => {
      item.style.margin = "0px 150px";
      item.style.width = `${widthAndMarginOneItem - 300}px`;
    });
  }

  let count = 0;
  let spacing = widthItemAll - widthAndMarginOneItem * amountSilde;
  next.addEventListener("click", () => {
    count += widthAndMarginOneItem;
    if (count > spacing) {
      count = 0;
    }
    parentSize.style.transform = `translateX(${-count}px)`;
  });

  prev.addEventListener("click", () => {
    count -= widthAndMarginOneItem;
    if (count < 0) {
      count = spacing;
    }
    parentSize.style.transform = `translateX(${-count}px)`;
  });
}

if (media[0].matches) {
  makeSliderItem(
    5,
    sliderItems,
    sliderItemSize,
    sliderItemAll,
    sliderItemNext,
    sliderItemPrev
  );
} else if (media[1].matches) {
  makeSliderItem(
    3,
    sliderItems,
    sliderItemSize,
    sliderItemAll,
    sliderItemNext,
    sliderItemPrev
  );
}
if (media[2].matches) {
  makeSliderItem(
    3,
    sliderItems,
    sliderItemSize,
    sliderItemAll,
    sliderItemNext,
    sliderItemPrev
  );
}

if (media[3].matches) {
  makeSliderItem(
    2,
    sliderItems,
    sliderItemSize,
    sliderItemAll,
    sliderItemNext,
    sliderItemPrev
  );
}

//   transform: translateX(-50%) translateY(150%);
// notification
var notification = document.querySelector(".notification");
var notifiWeb = document.querySelector(".notification__website");
var closeNotifi = document.querySelector(".notification__close");

function hideNotifi() {
  notification.style.display = "none";
}

// login--

var userLogin = document.querySelector(".header-infor__user");
var btnUser = document.querySelector(".btn-user");

userLogin.addEventListener("click", function () {
  btnUser.classList.toggle("show");
  console.log(123);
});
var customer = document.querySelector(".customer");

var customerSize = document.querySelector(".customer__size");
var customerAll = document.querySelectorAll(".customer__evaluate");
var nextCustomer = document.querySelector(".next-customer");
var prevCustomer = document.querySelector(".prev-customer");

// VDN
function showVND(element) {
  element.classList.toggle("show-vnd");
}

var headerNavigation = document.querySelector(".header-navigation");
// js responsive
if (media[0].matches) {
  makeSliderItem(
    1,
    customer,
    customerSize,
    customerAll,
    nextCustomer,
    prevCustomer
  );
}
if (media[1].matches) {
  makeSliderItem(
    0,
    customer,
    customerSize,
    customerAll,
    nextCustomer,
    prevCustomer
  );
  window.addEventListener("scroll", function () {
    if (window.scrollY > 126) {
      headerNavigation.classList.add("header-navigation--is-stuck");
    } else {
      headerNavigation.classList.remove("header-navigation--is-stuck");
    }
  });
}
if (media[2].matches) {
  var headerLinkIconMobileLeft = document.querySelectorAll(
    ".header-link__icon-mobile-left"
  );
  var headerNavigationList = document.querySelector(
    ".header-navigation__list--mobile"
  );

  headerLinkIconMobileLeft.forEach((icon, index) => {
    icon.addEventListener("click", function (e) {
      if (icon.classList.contains("active")) {
        headerLinkIconMobileLeft[1].classList.toggle("active");
        headerLinkIconMobileLeft[0].classList.toggle("active");
      }
      if (headerLinkIconMobileLeft[0].classList.contains("active")) {
        headerNavigationList.style.transform = " translateX(0%)";
      } else {
        headerNavigationList.style.transform = " translateX(-100%)";
      }
    });
  });

  // mobile-user

  var mobileUser = document.querySelector(".mobile-user");
  var isBoolean = false;
  mobileUser.addEventListener("click", function () {
    isBoolean = !isBoolean;

    $(".btn-user__mobile").animate(
      [
        { transform: "translateX(-0px) translateY(5px)" },
        { transform: " translateX(-107px) translateY(5px)" },
      ],
      {
        duration: 500,
        iterations: 1,
      }
    );
    if ($(".btn-user__mobile").classList.contains("show")) {
      $(".btn-user__mobile").classList.remove("show");
    } else {
      $(".btn-user__mobile").classList.add("show");
    }
  });

  makeSliderItem(
    0,
    customer,
    customerSize,
    customerAll,
    nextCustomer,
    prevCustomer
  );
}

if (media[3].matches) {
}
