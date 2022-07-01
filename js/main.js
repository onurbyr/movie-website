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

let slideIndex = 1;

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  console.log(n);
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

//Run every each 2 seconds
setInterval(() => {
  plusSlides(1);
}, 2000);
