let modalBtns = document.querySelectorAll(".more");
let modal = document.querySelector(".modal");

modalBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    modal.classList.remove("hidden");
  });
});

modal.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal__close") ||
    e.target.classList.contains("overlay")
  ) {
    modal.classList.add("hidden");
  }
});
