let links = document.querySelectorAll(".menu-list__link");
let mainScroll = document.querySelector(".main__scroll");
let newArr = [...links, mainScroll];

newArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.currentTarget.getAttribute("href").slice(1);

    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
