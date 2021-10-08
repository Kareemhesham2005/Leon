let toggle = document.querySelector(".icon");
let ul = document.querySelector(".header .links ul");
let menuOpen = false;
toggle.addEventListener("click", function () {
  if (!menuOpen) {
    toggle.classList.add("open");
    ul.style.cssText = "display: block !important;";
    menuOpen = true;
  } else {
    toggle.classList.remove("open");
    ul.style.cssText = "display: none !important;";
    menuOpen = false;
  }
});
