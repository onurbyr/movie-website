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
const popup = document.querySelectorAll(".people-details-circle");
window.togglePopup = (e) => {
  popup.forEach((p) => {
    if (p === e) {
      p.querySelector(".popup").classList.add("show");
    } else {
      p.querySelector(".popup").classList.remove("show");
    }
  });
};

// detect page click except circle and popup
document.addEventListener("click", (event) => {
  let isClickInsideElement =
    event.target.classList.contains("people-details-circle") ||
    event.target.classList.contains("popup");
  if (!isClickInsideElement) {
    // Do something click is outside specified element
    popup.forEach((p) => {
      p.querySelector(".popup").classList.remove("show");
    });
  }
});
//Popup---
