import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var elements = document.querySelectorAll(".price");
  console.log(elements);
  elements.forEach(function(el) {
    if (el.classList.contains("hot")) {
      el.innerHTML += "&#128293";
    }
  });
});
