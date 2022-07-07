const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

//---Search Container
const detailsSearchContainer = document.querySelector(
  ".search-container-details"
);
const detailsSearchButton = document.querySelector(
  ".search-container-details i"
);
detailsSearchButton.addEventListener("click", () => {
  detailsSearchContainer.classList.toggle("search-container-details-active");
});
//Search Container---

//---Read More
const overview = document.querySelector("#details-overview");
let n = 1500; //read more after n character
if (screen.width < 800) {
  n = 400;
}
let part1 = overview.innerText.slice(0, n);
let part2 = overview.innerText.slice(n, overview.innerText.length);

if (part2 === "") {
  document.querySelector("#myBtn").style.display = "none";
} else {
  overview.innerHTML = `${part1}<span id="dots">...</span><span id="more">${part2}</span>`;
}

window.readMore = () => {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
};
//Read More---

//---Genres
const genresLeftButton = document.querySelector(".genres-side-left");
const genresRightButton = document.querySelector(".genres-side-right");
const detailsScrollbar = document.querySelector(".details-genres");

genresLeftButton.addEventListener("click", () => {
  detailsScrollbar.scrollLeft -= 300;
});

genresRightButton.addEventListener("click", () => {
  detailsScrollbar.scrollLeft += 300;
});

const genres = document.querySelector(".details-genres");

const isOverflown = ({
  clientWidth,
  clientHeight,
  scrollWidth,
  scrollHeight,
}) => {
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};

if (!isOverflown(detailsScrollbar)) {
  genresLeftButton.style.display = "none";
  genresRightButton.style.display = "none";
}
//if touch device hide buttons
if (isTouchDevice()) {
  genresLeftButton.style.display = "none";
  genresRightButton.style.display = "none";
}
//Genres---

//---Actors
const actorsLeftButton = document.querySelector(".actors-controls-left");
const actorsRightButton = document.querySelector(".actors-controls-right");
const actorsScrollbar = document.querySelector(".actors-scroll");
let currentScrollPosition = 0;

const hideActorsButton = () => {
  //delay set for getting current scollposition properly
  setTimeout(() => {
    currentScrollPosition = actorsScrollbar.scrollLeft;
    if (
      actorsScrollbar.offsetWidth + currentScrollPosition >=
      actorsScrollbar.scrollWidth
    ) {
      actorsRightButton.style.opacity = 0.2;
      actorsRightButton.style.pointerEvents = "none";
    }
    if (
      actorsScrollbar.offsetWidth + currentScrollPosition <=
      actorsScrollbar.offsetWidth
    ) {
      actorsLeftButton.style.opacity = 0.2;
      actorsLeftButton.style.pointerEvents = "none";
    }
  }, 400);
};

actorsLeftButton.addEventListener("click", () => {
  actorsScrollbar.scrollLeft -= 300;
  actorsRightButton.style.pointerEvents = "auto";
  actorsRightButton.style.opacity = 1;
  hideActorsButton();
});

actorsRightButton.addEventListener("click", () => {
  actorsScrollbar.scrollLeft += 300;
  actorsLeftButton.style.pointerEvents = "auto";
  actorsLeftButton.style.opacity = 1;
  hideActorsButton();
});

hideActorsButton();

//if touch device hide buttons
if (isTouchDevice()) {
  actorsLeftButton.style.display = "none";
  actorsRightButton.style.display = "none";
}

//Actors---
