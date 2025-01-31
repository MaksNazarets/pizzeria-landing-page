const burger = document.querySelector(".menu-burger");
const header = document.querySelector("header");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
});

window.onscroll = () => {
  if (window.scrollY > 40) header.classList.add("sticky");
  else header.classList.remove("sticky");
};
