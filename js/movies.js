const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

//---Genres
const genresLeftButton = document.querySelector(".genres-left-arrow");
const genresRightButton = document.querySelector(".genres-right-arrow");
const genresScrollBar = document.querySelector(".genre-box-container");
let currentScrollPosition = 0;

const hideGenresButton = () => {
  //delay set for getting current scollposition properly
  setTimeout(() => {
    currentScrollPosition = genresScrollBar.scrollLeft;
    if (
      genresScrollBar.offsetWidth + currentScrollPosition >=
      genresScrollBar.scrollWidth
    ) {
      genresRightButton.style.display = "none";
    }
    if (
      genresScrollBar.offsetWidth + currentScrollPosition <=
      genresScrollBar.offsetWidth
    ) {
      genresLeftButton.style.display = "none";
    }
  }, 400);
};

genresLeftButton.addEventListener("click", () => {
  genresScrollBar.scrollLeft -= 600;
  genresRightButton.style.display = "flex";
  hideGenresButton();
});

genresRightButton.addEventListener("click", () => {
  genresScrollBar.scrollLeft += 600;
  genresLeftButton.style.display = "flex";
  hideGenresButton();
});

hideGenresButton();

//if touch device hide buttons
if (isTouchDevice()) {
  genresLeftButton.style.display = "none";
  genresRightButton.style.display = "none";
}

//Genres---
