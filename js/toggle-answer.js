//creates one button element and one answer element for the first two cards

const answer1Element = document.querySelector('[data-js="answer1"]');

const answer1Button = document.querySelector('[data-js="answer1button"]');

const answer2Element = document.querySelector('[data-js="answer2"]');

const answer2Button = document.querySelector('[data-js="answer2button"]');

//toggles the visibility of the first two cards' answers

answer1Button.addEventListener("click", () => {
  answer1Element.classList.toggle("hidden");
  if (answer1Button.textContent === "Show Answer") {
    answer1Button.textContent = "Hide Answer";
  }else{
    answer1Button.textContent = "Show Answer";
  }
});
answer2Button.addEventListener("click", () => {
  answer2Element.classList.toggle("hidden");
  if (answer2Button.textContent === "Show Answer") {
    answer2Button.textContent = "Hide Answer";
  }else{
    answer2Button.textContent = "Show Answer";
  }
});