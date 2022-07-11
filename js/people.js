//href details
const listItemImage = document.querySelectorAll(".list-item-people .list-item-image");
listItemImage.forEach((e) => {
  e.style.cursor = "pointer";
  e.addEventListener("click", () => {
    location.href = "./people-details.html";
  });
});