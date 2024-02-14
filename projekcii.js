//<--------------------------------scrollToTopBtn----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
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
});
//<--------------------------------GO-TO-PROJECTION-2D----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  let goToProjection2d = document.getElementById("goToProjection2d");
  goToProjection2d.addEventListener("click", function () {
    window.location.href = "2D-projekciq.html";
  });
});
//<--------------------------------GO-TO-PROJECTION-3D----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  let goToProjection3d = document.getElementById("goToProjection3d");
  goToProjection3d.addEventListener("click", function () {
    window.location.href = "3D-projekciq.html";
  });
});
//<--------------------------------GO-TO-PROJECTION-4DX----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  let goToProjection4dx = document.getElementById("goToProjection4dx");
  goToProjection4dx.addEventListener("click", function () {
    window.location.href = "4DX-projekciq.html";
  });
});
//<--------------------------------GO-TO-PROJECTION-IMAX----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  let goToProjectionImax = document.getElementById("goToProjectionImax");
  goToProjectionImax.addEventListener("click", function () {
    window.location.href = "IMAX-projekciq.html";
  });
});
//<--------------------------------SOCIAL-MEDIA-LINK----------------------------------->
function openSocialMedia(link) {
  window.open(link, "_blank");
}

//<--------------------------------MENU----------------------------------->
$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});
