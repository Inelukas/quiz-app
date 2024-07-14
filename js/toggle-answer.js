
//toggles the visibility of the first two cards' answers

export function addAnswerButtonListeners() {
  let allAnswerButtons = document.querySelectorAll(".answerbutton");

  allAnswerButtons.forEach((answerButton) => {
    if (!answerButton.hasListener) {
    answerButton.addEventListener("click", () => {
      const cardAttribute = answerButton.getAttribute("id");
      const currentCard = document.querySelector(cardAttribute);
      const answerElement = currentCard.querySelector('[data-js="answer"]');
      answerElement.classList.toggle("hidden");
      if (answerButton.textContent === "Show Answer") {
        answerButton.textContent = "Hide Answer";
      }else{
        answerButton.textContent = "Show Answer";
      }
    });
    answerButton.hasListener = true;
  }
  })
}

document.addEventListener("DOMContentLoaded", addAnswerButtonListeners);