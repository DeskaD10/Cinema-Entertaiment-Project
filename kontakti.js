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
//<--------------------------------MENU----------------------------------->
$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});
