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

//---Popup
let previousElement;
window.togglePopup = (e) => {
  if (previousElement) {
    previousElement.querySelector(".popup").classList.remove("show");
  }
  e.querySelector(".popup").classList.add("show");
  previousElement = e;
};

// detect page click except circle and popup
document.addEventListener("click", (event) => {
  let isClickInsideElement =
    event.target.classList.contains("people-details-circle") ||
    event.target.classList.contains("popup");
  if (!isClickInsideElement) {
    // Do something click is outside specified element
    if (previousElement) {
      previousElement.querySelector(".popup").classList.remove("show");
    }
  }
});
//Popup---
