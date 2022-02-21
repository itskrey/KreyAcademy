let button = document.querySelector(".open-menu"),
  menu = document.getElementById("Menu"),
  header = document.querySelector("header");

button.addEventListener("click", () => {
  if (!menu.classList.contains("open")) {
    menu.classList.add("open");
    setTimeout(() => {
      menu.classList.add("open-height");
      header.classList.add("inverted");
      button.innerHTML = "close";
    }, 300);
  } else {
    menu.classList.remove("open-height");
    header.classList.remove("inverted");
    button.innerHTML = "menu";
    setTimeout(() => {
      menu.classList.remove("open");
    }, 300);
  }
});
