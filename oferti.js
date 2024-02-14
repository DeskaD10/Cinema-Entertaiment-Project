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

//<--------------------------------SOCIAL-MEDIA-LINK----------------------------------->
function openSocialMedia(link) {
  window.open(link, "_blank");
}
//<--------------------------------MOUSE-ENTER-BLURRED-ZONE----------------------------------->
const ofertiBox = document.querySelectorAll(".oferti-promo");
ofertiBox.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("active");

    ofertiBox.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.add("blurred");
      }
    });
  });

  box.addEventListener("mouseleave", () => {
    ofertiBox.forEach((otherBox) => {
      otherBox.classList.remove("active");
    });

    ofertiBox.forEach((otherBox) => {
      otherBox.classList.remove("blurred");
    });
  });
});
//<--------------------------------BACK-TO-OFFERS----------------------------------->
document.addEventListener("DOMContentLoaded", function () {
  let backButton = document.getElementById("backToOffers");
  backButton.addEventListener("click", function () {
    window.location.href = "oferti.html";
  });
});
//<--------------------------------MENU----------------------------------->
$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});
