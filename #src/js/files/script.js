let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "30px";
  } else {
    document.querySelector(".header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
