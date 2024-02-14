//<--------------------------------SLIDER----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".slider-container");
  const slider = document.querySelectorAll(".slider-picture");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;
  const maxIndex = slider.length - 1;
  let intervalId;

  slider.forEach((slide, index) => {
    slide.style.display = index === 0 ? "block" : "none";
  });

  function showSlider(index) {
    slider.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });

    prevBtn.classList.toggle("inactive", index === 0);
    nextBtn.classList.toggle("inactive", index === maxIndex);
  }

  function startAutoSlide() {
    intervalId = setInterval(() => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        showSlider(currentIndex);
      } else {
        currentIndex = 0;
        showSlider(currentIndex);
      }
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      showSlider(currentIndex);
      stopAutoSlide();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      showSlider(currentIndex);
      stopAutoSlide();
    }
  });
  startAutoSlide();
});
//<--------------------------------scrollToTopBtn----------------------------------->
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

scrollToTopBtn.addEventListener("click", scrollToTop);

const handleScroll = () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
window.addEventListener("scroll", handleScroll);
handleScroll();
//<--------------------------------SOCIAL-MEDIA-LINK----------------------------------->
function openSocialMedia(link) {
  window.open(link, "_blank");
}
//<--------------------------------DAY-LINE-PROGRAM----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  const days = document.querySelectorAll(".day");
  const movies = document.querySelectorAll(".line");

  days.forEach((day, index) => {
    day.addEventListener("click", () => {
      movies.forEach((movie, movieIndex) => {
        movie.style.display = index === movieIndex ? "flex" : "none";
      });

      days.forEach((d, i) => {
        d.classList.toggle("active", index === i);
      });
    });
  });

  showAllMovies();

  function showAllMovies() {
    movies.forEach((movie) => {
      movie.style.display = "flex";
    });

    days.forEach((d) => {
      d.classList.remove("active");
    });
  }
  //<--------------------------------ALL-PROGRAM----------------------------------->
  const showAllMoviesBtn = document.getElementById("showAllMoviesBtn");
  if (showAllMoviesBtn) {
    showAllMoviesBtn.addEventListener("click", showAllMovies);
  }
});
//<--------------------------------ZOOM-EFFECT-ON-PICTURES-OF-MOVIES----------------------------------->
function zoomIn(element) {
  element.style.transform = "scale(1.2)";
}

function zoomOut(element) {
  element.style.transform = "scale(1)";
}
//<--------------------------------MENU----------------------------------->
$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});
