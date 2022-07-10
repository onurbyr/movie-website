//---Slider
let slideIndex = 1;
window.plusSlides = (n) => {
  showSlides((slideIndex += n));
};

window.currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

showSlides(slideIndex);

// Run every 3 seconds
setInterval(() => {
  plusSlides(1);
}, 3000);

//Slider---

//---Custom Scrollbar
//Trending
const customScrollbarTrending = document.querySelector(
  "#custom-scrollbar-trending"
);
window.scrollLeftTrending = () => {
  customScrollbarTrending.scrollLeft -= 300;
};

window.scrollRightTrending = () => {
  customScrollbarTrending.scrollLeft += 300;
};
//Popular
const customScrollbarPopular = document.querySelector(
  "#custom-scrollbar-popular"
);
window.scrollLeftPopular = () => {
  customScrollbarPopular.scrollLeft -= 300;
};

window.scrollRightPopular = () => {
  customScrollbarPopular.scrollLeft += 300;
};

//Custom Scrollbar---
