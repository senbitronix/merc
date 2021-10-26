let tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
let tabsContentElems = document.querySelectorAll("[data-tabs-field]");
let titles = document.querySelectorAll(".design__title");
let tabsHandlerElemsArray = [...tabsHandlerElems];

for (let el of tabsHandlerElems) {
  el.addEventListener("click", (e) => {
    tabsHandlerElems.forEach((item) => {
      item.classList.remove("design-list__item_active");
    });
    el.classList.add("design-list__item_active");

    let i = tabsHandlerElemsArray.indexOf(el);
    titles.forEach((item) => {
      item.classList.add("hidden");
    });
    titles[i].classList.remove("hidden");

    tabsContentElems.forEach((item) => {
      if (item.dataset.tabsField == el.dataset.tabsHandler) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
}
