let menu = document.querySelector(".menu");
let humburgerMenu = document.querySelector(".humburger-menu");

const toggleMenu = () => {
  menu.classList.toggle("menu-active");
  humburgerMenu.classList.toggle("humburger-menu-active");
};

humburgerMenu.addEventListener("click", (e) => {
  toggleMenu();
});

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-list__link")) {
    menu.classList.remove("menu-active");
    humburgerMenu.classList.remove("humburger-menu-active");
  }
});
