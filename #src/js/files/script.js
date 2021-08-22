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

// function isOnScreen(elem) {
//   // if the element doesn't exist, abort
//   if (elem.length == 0) {
//     return;
//   }
//   var jQuerywindow = jQuery(window);
//   var viewport_top = jQuerywindow.scrollTop();
//   var viewport_height = 50; //jQuerywindow.height()
//   var viewport_bottom = viewport_top + viewport_height;
//   var jQueryelem = jQuery(elem);
//   var top = jQueryelem.offset().top + 0;
//   var height = jQueryelem.height() + 130;
//   var bottom = top + height;

//   if (
//     (top >= viewport_top && top < viewport_bottom) ||
//     (bottom > viewport_top && bottom <= viewport_bottom) ||
//     (height > viewport_height &&
//       top <= viewport_top &&
//       bottom >= viewport_bottom)
//   ) {
//     return true;
//   }
// }


// document.addEventListener(
//   "scroll",
//   function (e) {
//     if (isOnScreen(jQuery(".light"))) {
//       $("header").add("backgroundColor", "#fff");
//     } else {}
//   },
//   false
// );


// const header = document.querySelector("header");
// const sectionsDark = document.querySelector(".dark");


// const sectionsDarkObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       header.classList.add("dark");
//     } else {
//       header.classList.remove("dark");
//     }
//   });
// });

// sectionsDarkObserver.observe(sectionsDark);


//=====================================================================================
var themeSwitcher = document.getElementById("switcher");
var themeLink = document.getElementById("theme-link");

themeSwitcher.addEventListener("click", function () {
  ChangeTheme();
});

function ChangeTheme() {
  let lightTheme = "css/light.css";
  let darkTheme = "css/dark.css";

  var currTheme = themeLink.getAttribute("href");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  themeLink.setAttribute("href", currTheme);

  Save(theme);

  function Save(theme) {
    var Request = new XMLHttpRequest();
    Request.open("GET", "themes.php?theme=" + theme, true);
    Request.send();
  }
  
}
