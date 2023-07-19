const primaryNav = document.querySelector(".nav__links");
const toggleBtn = document.querySelector(".nav__mobile__toggle");
const btnImg = document.querySelector(".menu__icon");

toggleBtn.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    btnImg.src = "../../../close.png";
  }
  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    btnImg.src = "../../../menu.png";
  }
});
