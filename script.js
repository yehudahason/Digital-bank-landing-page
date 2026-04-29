const menuBtn = document.querySelector(".hamburger");
const menuEl = document.querySelector(".ul-container");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  menuEl.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target !== menuBtn && !menuEl.contains(e.target)) {
    menuEl.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
});
