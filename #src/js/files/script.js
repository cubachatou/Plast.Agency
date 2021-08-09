// let prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".header").style.top = "30px";
//   } else {
//     document.querySelector(".header").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// };

function isOnScreen(elem) {
  // if the element doesn't exist, abort
  if (elem.length == 0) {
    return;
  }
  var jQuerywindow = jQuery(window);
  var viewport_top = jQuerywindow.scrollTop();
  var viewport_height = 50; //jQuerywindow.height()
  var viewport_bottom = viewport_top + viewport_height;
  var jQueryelem = jQuery(elem);
  var top = jQueryelem.offset().top + 0;
  var height = jQueryelem.height() + 130;
  var bottom = top + height;

  if (
    (top >= viewport_top && top < viewport_bottom) ||
    (bottom > viewport_top && bottom <= viewport_bottom) ||
    (height > viewport_height &&
      top <= viewport_top &&
      bottom >= viewport_bottom)
  ) {
    return true;
  }
}

document.addEventListener(
  "scroll",
  function (e) {
    if (isOnScreen(jQuery(".slider"))) {
      $(".icon-menu__span").css("backgroundColor", "#fff");
      $(".header__logo").css(
        "backgroundImage",
        "url(../img/icons/logo.svg)"
      );
    } else {
      $(".icon-menu__span").css("backgroundColor", "#050000");
      $(".header__logo").css(
        "backgroundImage",
        "url(../img/icons/logo-black.svg)"
      );
    }
  },
  false
);

document.addEventListener(
  "scroll",
  function (e) {
    if (isOnScreen(jQuery(".to-dark"))) {
      $(".icon-menu__span").css("backgroundColor", "#050000");
      $(".header__logo").css(
        "backgroundImage",
        "url(../img/icons/logo-black.svg)"
      );
    } else {}
  },
  false
);

document.addEventListener(
  "scroll",
  function (e) {
    if (isOnScreen(jQuery(".brands"))) {
      $(".icon-menu__span").css("backgroundColor", "#fff");
      $(".header__logo").css(
        "backgroundImage",
        "url(../img/icons/logo.svg)"
      );
    } else {}
  },
  false
);

document.addEventListener(
  "scroll",
  function (e) {
    if (isOnScreen(jQuery(".footer"))) {
      $(".icon-menu__span").css("backgroundColor", "#fff");
      $(".header__logo").css(
        "backgroundImage",
        "url(../img/icons/logo.svg)"
      );
    } else {}
  },
  false
);

document.addEventListener(
  "scroll",
  function (e) {
    if (isOnScreen(jQuery(".works"))) {
      $(".icon-menu__span").css("backgroundColor", "#fff");
      $(".header__logo").css(
        "backgroundImage",
        "url(../img/icons/logo.svg)"
      );
    } else {}
  },
  false
);

