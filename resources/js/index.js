
const nav = document.getElementById("nav");
const menuBar = document.getElementById("menu_bar");
const menuBarContents = document.getElementById("menu_bar_contents");
const navItems = document.querySelectorAll('.nav_menu_item')
let menuOpen = false
menuBar.addEventListener("click", () => {
    if (!menuOpen) {
      menuBar.classList.add("menuOpen");
      menuBarContents.style.transform = "translateX(0)"
      nav.style.position = "fixed"
      menuOpen = true;
    } else {
      menuBarContents.style.transform = "translateX(100%)"
      menuBar.classList.remove("menuOpen");
      nav.style.position = "absolute"
      menuOpen = false;
    }
  });