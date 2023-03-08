// -----------------------------Counter----------------------->>

const counters = document.querySelectorAll("[data-counter]");

if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;

      if (target.closest(".btn-counter")) {
        let value = parseInt(target.closest(".counter").querySelector("input").value);

        if (target.closest(".plus")) {
          value++;
        } else {
          value--;
        }

        if (value <= 0) {
          value = 0;
        }

        target.closest(".counter").querySelector("input").value = value;
      }
    });
  });
}
// ---------------------------------------------------------->>

// -----------------------------Slaider---------------------->>

let offset = 0;
const sliderLine = document.querySelector(".wrapper-slider__slider-line");
const sliders = sliderLine.querySelectorAll(".slider-card");
let count = 0;
let width;

// function init() {
//   width = document.querySelector(".wrapper-slider__slider").offsetWidth;
//   sliderLine.style.width = width * sliders.length + "px";
//   sliders.forEach((item) => {
//     // item.style.width = width +"px";
//     item.style.height = "auto";
//   });
//   rollSlider();
// }
// window.addEventListener("resize", init);
// init();

// document.querySelector(".prev").addEventListener("click", function () {
//   count--;
//   if (count < 0) {
//     count = sliders.length - 1;
//   }
//   rollSlider();
// });

// document.querySelector(".next").addEventListener("click", function () {
//   count++;
//   if (count > sliders.lenght) {
//     count = 0;
//   }
//   rollSlider();
// });

// function rollSlider() {
//   sliderLine.style.transform = "translate(-" + count * width + "px)";
// }

document.querySelector(".next").addEventListener("click", function () {
  offset += 354;
  if (offset > 1000) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function () {
  offset -= 354;
  if (offset < 0) {
    offset = 708;
  }
  sliderLine.style.left = -offset + "px";
});

new Swiper(".image-slider", {
  grabCursor: true,
  sliderToClickedSlide: true,
  mousewheel: {
    sensitivity: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
});
// ---------------------------------------------------------->>

// -----------------------------Tabs------------------------->>

window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tab = document.querySelectorAll(".nav-link"),
    header = document.querySelector(".title-navigation"),
    tabContent = document.querySelectorAll(".tabs");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  header.addEventListener("click", (e) => {
    let target = e.target;
    if (target && target.classList.contains("nav-link")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          tab[i].classList.add("active-link");
        } else {
          tab[i].classList.remove("active-link");
        }
      }
    }
  });
});
// ---------------------------------------------------------->>
