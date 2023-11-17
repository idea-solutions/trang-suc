const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Validator(option) {
  var formElement = document.querySelector(option.form);
  var selectorRules = {};
  var data = [];
  function getParent(parent, child) {
    while (child.parentElement.closest(parent)) {
      child = child.parentElement;
    }
    return child;
  }
  // LocalStorage getItem
  newData = localStorage.getItem("USER");
  newData = JSON.parse(newData);
  option.getSubmitted(newData);

  var error = (inputElement, rule) => {
    var parentInput = getParent(option.formGroup, inputElement);
    var formMessage = parentInput.querySelector(option.errorMess);
    var errorMessage = rule.test(inputElement.value);
    return {
      showError() {
        parentInput.classList.add("invalid");
        formMessage.innerText = errorMessage;
      },
      removeError() {
        parentInput.classList.remove("invalid");
        formMessage.innerText = "";
      },
    };
  };
  function validate(inputElement, rule) {
    var parentInput = getParent(option.formGroup, inputElement);
    var formMessage = parentInput.querySelector(option.errorMess);
    var errorMessage;
    var rules = selectorRules[rule.selector];
    for (var i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      parentInput.classList.add("invalid");
      formMessage.innerText = errorMessage;
    } else {
      parentInput.classList.remove("invalid");
      formMessage.innerText = "";
    }
    return !!errorMessage;
  }

  if (formElement) {
    option.rules.forEach((rule) => {
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = () => {
          validate(inputElement, rule);
        };
        inputElement.oninput = () => {
          error(inputElement, rule).removeError();
        };
      }
    });
    var submitForm = formElement.querySelector(option.submit);
    submitForm.addEventListener("click", function (e) {
      if (submitForm == e.target) {
        e.preventDefault();
      }
      var isInvalid = true;
      var succesfulRegister = document.querySelector(".succesful-register");
      if (isInvalid) {
        if (typeof option.onSubmit == "function") {
          var object = {};
          option.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);
            if (!validate(inputElement, rule)) {
              object = { ...object, [rule.selector]: inputElement.value };
            } else {
              isInvalid = false;
            }
          });

          if (isInvalid) {
            data.push(object);
            localStorage.setItem("USER", JSON.stringify(option.onSubmit(data)));
          }
          if (isInvalid) {
            var inputAll = document.querySelectorAll("input");
            inputAll.forEach((input) => {
              input.value = "";
            });
            succesfulRegister.style.display = "block";
            succesfulRegister.style.transform = "translateY(0)";
          }
        } else {
          formElement.submit();
        }
      }
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test(value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test(value) {
      var re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(value.trim())
        ? undefined
        : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isPassword = function (selector, message, min) {
  return {
    selector: selector,
    test(value) {
      return value.trim().length >= min
        ? undefined
        : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isConfirmPassword = function (selector, confirmValue, message) {
  return {
    selector: selector,
    test(value) {
      if (value.trim().length <= 0) {
        return message || "Vui lòng nhập trường này";
      } else {
        return value.trim() == confirmValue().trim()
          ? undefined
          : message || "Vui lòng nhập trường này";
      }
    },
  };
};

var iconClose = document.querySelector(".succesful-notifi i");
var succesfulRegister = document.querySelector(".succesful-register");
iconClose.addEventListener("click", function () {
  succesfulRegister.style.transform = "translateY(100%)";
  setTimeout(() => {
    succesfulRegister.style.display = "none";
  }, 100);
});

var userLogin = document.querySelector(".header-infor__user");
var btnUser = document.querySelector(".btn-user");

userLogin.addEventListener("click", function () {
  btnUser.classList.toggle("show");
});

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
