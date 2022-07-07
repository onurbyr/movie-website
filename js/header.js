//---Header
const menuOpen = document.querySelector(".burger");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});

// const navLinks = document.querySelectorAll(".nav-links li");
// navLinks.forEach((selectedElement) => {
//   selectedElement.addEventListener("click", () => {
//     navLinks.forEach((element) => {
//       if (element === selectedElement) {
//         element.classList.add("active-link");
//       } else {
//         element.classList.remove("active-link");
//       }
//     });
//   });
// });

//Header---
