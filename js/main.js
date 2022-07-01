const menuOpen = document.querySelector(".burger");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});
