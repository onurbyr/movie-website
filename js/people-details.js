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
    const element = childs[i];
    if (
      element.outerHTML === event.target.outerHTML ||
      event.target.classList.contains("people-details-circle") ||
      event.target.classList.contains("show")
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

// detect page click except circle and popup -- 2nd way --
// const peopleDetailsCircle = document.querySelector(".people-details-circle");

// document.addEventListener("click", (event) => {
//   let isClickInsideElement =
//     peopleDetailsCircle.outerHTML.includes(event.target.outerHTML) ||
//     event.target.classList.contains("people-details-circle") ||
//     event.target.classList.contains("show");
//   if (!isClickInsideElement) {
//     if (previousElement) {
//       previousElement.querySelector(".popup").classList.remove("show");
//     }
//   }
// });

//Popup---
