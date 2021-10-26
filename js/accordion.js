let btns = document.querySelectorAll(".feature__link");
let lists = document.querySelectorAll(".feature-sub");

btns.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    if (!item.className.includes("feature__link_active")) {
      btns.forEach((btn) => {
        btn.classList.remove("feature__link_active");
      });
      lists.forEach((list) => {
        list.classList.add("hidden");
      });
    }

    item.classList.toggle("feature__link_active");
    lists[i].classList.toggle("hidden");
  });
});
