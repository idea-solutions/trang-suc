const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var userLogin = document.querySelector(".header-infor__user");
var btnUser = document.querySelector(".btn-user");

userLogin.addEventListener("click", function () {
  btnUser.classList.toggle("show");
});

const rangeInputs = document.querySelectorAll(".range-input input");
const priceInputs = document.querySelectorAll(".price-input input");
const progress = document.querySelector(".slider-price .progress");

var headerNavigation = document.querySelector(".header-navigation");
const media = [
  window.matchMedia("(min-width:64rem"),
  window.matchMedia("(min-width:42.375rem) and (max-width:63.938rem"),
  window.matchMedia("(max-width:42.25rem"),
  window.matchMedia("(max-width:25.813rem"),
];
if (media[0].matches) {
}
if (media[1].matches) {
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
}
if (media[3].matches) {
}

function showVND(element) {
  element.classList.toggle("show-vnd");
}

// collectio js
let collection = [
  { img: "../collection/1.webp", name: "Nhẫn vòng ADV", price: 7000 },
  { img: "../collection/2.webp", name: "Nhẫn đôi kim cương", price: 3500 },
  { img: "../collection/3.webp", name: "Nhẫn ngọc trai cao cấp", price: 7000 },
  { img: "../collection/4.webp", name: "Vòng tay cao cấp", price: 5000 },
  { img: "../collection/5.webp", name: "Nhẫn vàng cao cấp", price: 1000 },
  { img: "../collection/6.webp", name: "Nhẫn vòng ADV", price: 7000 },
  { img: "../collection/7.webp", name: "Bông tai cao cấp Biz", price: 3500 },
  { img: "../collection/8.webp", name: "Nhẫn ngọc trai cao cấp", price: 7000 },
  { img: "../collection/9.webp", name: "Vòng tay cao cấp", price: 500 },
  { img: "../collection/10.webp", name: "Nhẫn ngọc trai cao cấp", price: 7600 },
  { img: "../collection/11.webp", name: " Vòng tay cao cấp", price: 2500 },
  {
    img: "../collection/12.webp",
    name: " Nhẫn ngọc trai cao cấp",
    price: 4500,
  },
  { img: "../collection/13.webp", name: " Vòng tay cao cấp", price: 1500 },
  { img: "../collection/14.webp", name: " Nhẫn vàng cao cấp", price: 1000 },
  { img: "../collection/15.webp", name: " Nhẫn vòng ADV", price: 7000 },
  { img: "../collection/16.webp", name: " Bông tai cao cấp Biz", price: 3500 },
  {
    img: "../collection/17.webp",
    name: " Nhẫn ngọc trai cao cấp",
    price: 7000,
  },
  { img: "../collection/18.webp", name: " Vòng tay cao cấp", price: 5000 },
  { img: "../collection/19.webp", name: " Nhẫn vàng cao cấp", price: 1000 },
  { img: "../collection/20.webp", name: " Nhẫn vàng cao cấp", price: 1000 },
];
var contentLeft = document.querySelector(".content__left");

var showPages = document.querySelectorAll(".show-page");

let amountSilde = 7;
let numberPage = 1;
function getIndex(index) {
  numberPage = index;
}

function showIcon(showPages, index) {
  if (showPages[showPages.length - 2].classList.contains("active")) {
    showPages[showPages.length - 1].style.opacity = "0";
    showPages[showPages.length - 1].style.cursor = "unset";
    showPages[0].style.opacity = "1";
  }

  if (showPages[1].classList.contains("active")) {
    showPages[0].style.opacity = "0";
    showPages[0].style.cursor = "unset";
    showPages[showPages.length - 1].style.opacity = "1";
  }
  if (showPages[index].classList.contains("active")) {
    getIndex(index);
  }
}

Array.from(showPages).forEach((page, index) => {
  if (numberPage == 1) {
    showPages[1].classList.add("active");
  }
  showIcon(showPages, index);
  page.addEventListener("click", function (e) {
    Array.from(showPages).forEach((pageEvent) => {
      if (pageEvent.classList.contains("active")) {
        pageEvent.classList.remove("active");
      }
    });

    page.classList.add("active");

    showIcon(showPages, index);
    renderCollection();
  });
});

function renderCollection() {
  let newCollection = collection;
  newCollection = newCollection.filter(
    (item, index) =>
      index >= (numberPage - 1) * amountSilde &&
      index <= amountSilde * numberPage - 1
  );
  var htmls = newCollection
    .map((item) => {
      return `
        <div class="slider-item__link content__item">
        <div class="slider-item__parent-img">
          <img class="slider-item__img" src=${item.img} alt="">
          <div class="slider-item__bag ">
              <i class="fa-solid fa-bag-shopping"></i>
    
          </div>   
        </div>
          <span>${item.name}</span>
          <small>${item.price}.000đ</small>
                         
    </div>
        `;
    })
    .join(" ");

  contentLeft.innerHTML = htmls;
}

renderCollection();

let priceGap = 1000;
rangeInputs.forEach((input) => {
  input.addEventListener("input", function (e) {
    let minVal = parseInt(rangeInputs[0].value);
    let maxVal = parseInt(rangeInputs[1].value);
    // percent
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInputs[0].value = maxVal - priceGap;
      } else {
        rangeInputs[1].value = minVal + priceGap;
      }
    } else {
      priceInputs[0].value = minVal;
      priceInputs[1].value = maxVal;
      progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
    }
  });
});

priceInputs.forEach((input) => {
  input.addEventListener("input", function (e) {
    let minVal = parseInt(priceInputs[0].value);
    let maxVal = parseInt(priceInputs[1].value);
    // percent
    console.log(minVal);
    if (maxVal - minVal >= priceGap) {
      if (e.target.className === "input-min") {
        rangeInputs[0].value = minVal;
        progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
      } else {
        rangeInputs[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
      }
    }
  });
});
