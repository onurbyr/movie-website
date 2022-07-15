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
const popup = document.getElementById("myPopup");
window.togglePopup = () => {
  popup.classList.toggle("show");
};

// detect page click except circle
const ignoreClickOnMeElement = document.querySelector(".people-details-circle");
document.addEventListener("click", (event) => {
  let isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  if (!isClickInsideElement) {
    //Do something click is outside specified element
    popup.classList.remove("show");
  }
});
//Popup---
