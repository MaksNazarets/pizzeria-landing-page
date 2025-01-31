const burger = document.querySelector(".menu-burger");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("#menu a");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
});

navLinks.forEach((l) =>
  l.addEventListener("click", () => burger.classList.remove("open"))
);

window.onscroll = () => {
  if (window.scrollY > 40) header.classList.add("sticky");
  else header.classList.remove("sticky");
};
