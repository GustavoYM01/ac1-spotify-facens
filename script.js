const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");
const btnSlide1 = document.querySelector("#btnSlide1");
const mobileMenu = document.querySelector(".mobileMenu");
const linkNav = document.querySelector(".linkNav");
const menuItems = document.querySelector("#menuItems");
const items = document.querySelectorAll(".linkNav");

mobileMenu.addEventListener("click", function () {
  menuItems.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});

let currentSlide = 0;

function toHome() {
  window.location.href = "/";
}

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);

setInterval(nextSlider, 5000);
