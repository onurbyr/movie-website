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
const peopleDetailsCircle = document.querySelector(".people-details-circle");
const childs = peopleDetailsCircle.getElementsByTagName("*");
let isClickInsideElement = false;

document.addEventListener("click", (event) => {
  let checkFalseCount = 0;
  for (let i = 0; i < childs.length; i++) {
    if (
      event.target.classList.contains(childs[i].className) ||
      event.target.classList.contains("people-details-circle")
    ) {
      isClickInsideElement = true;
    } else {
      checkFalseCount++;
    }
  }
  if (checkFalseCount === childs.length) {
    isClickInsideElement = false;
  }
  if (!isClickInsideElement) {
    // Do something click is outside specified element
    if (previousElement) {
      previousElement.querySelector(".popup").classList.remove("show");
    }
  }
});
//Popup---
