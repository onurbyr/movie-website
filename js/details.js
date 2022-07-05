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
