import ColorThief from "./color-thief.mjs"; //Component for getting dominant color of image
//---Header
const menuOpen = document.querySelector(".burger");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay-active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
});

const navLinks = document.querySelectorAll(".nav-links li");
navLinks.forEach((selectedElement) => {
  selectedElement.addEventListener("click", () => {
    navLinks.forEach((element) => {
      if (element === selectedElement) {
        element.classList.add("active-link");
      } else {
        element.classList.remove("active-link");
      }
    });
  });
});
//Header---

//Get dominant color
const colorThief = new ColorThief();
const getDominantColor = (img) => {
  // Make sure image is finished loading
  if (img.complete) {
    return colorThief.getColor(img);
  } else {
    img.addEventListener("load", function () {
      return colorThief.getColor(img);
    });
  }
};
//Get dominant color

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
  //setting dominant color of image as background
  const img = slides[slideIndex - 1].querySelector("img");
  let rgb = getDominantColor(img);
  slides[slideIndex - 1].style.backgroundColor =
    "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
  //setting dominant color of image as background
};

showSlides(slideIndex);

// Run every each 2 seconds
setInterval(() => {
  plusSlides(1);
}, 3000);

//Slider---

//---Custom Scrollbar
const customScrollbar = document.querySelector(".custom-scrollbar");
window.leftScroll = () => {
  customScrollbar.scrollLeft -= 300;
};

window.rightScroll = () => {
  customScrollbar.scrollLeft += 300;
};
//Custom Scrollbar---
