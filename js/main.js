const btnSubmit = document.getElementById("btn-submit");
const circles = document.querySelectorAll(".rating");
const ratingPanel = document.getElementById("rating-panel");
const thankYouPanel = document.getElementById("thank-you-panel");
const numberSpan = document.getElementById("number");

btnSubmit.addEventListener("click", () => {
  ratingPanel.classList.add("hidden");
  thankYouPanel.classList.remove("hidden");
});

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    numberSpan.textContent = circle.textContent;
  });
});
