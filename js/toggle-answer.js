const answer1Element = document.querySelector('[data-js="answer1"]');

const answer1Button = bodyElement.querySelector('[data-js="answer1button"]');

const answer2Element = document.querySelector('[data-js="answer2"]');

const answer2Button = bodyElement.querySelector('[data-js="answer2button"]');

answer1Button.addEventListener("click", () => {
  answer1Element.classList.toggle("hidden");
});
answer2Button.addEventListener("click", () => {
  answer2Element.classList.toggle("hidden");
});
