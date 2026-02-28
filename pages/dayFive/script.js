let panel = document.querySelectorAll(".panel");

panel.forEach((pan) => {
  pan.addEventListener("click", () => {
    pan.classList.toggle("active-top");
    pan.classList.toggle("open-card");
  });
});
