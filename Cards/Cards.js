import { mainElement } from "../lib/data.js";

let counter = 2;

export function loadCard() {
    let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
    cardsArray.forEach(cardHTML => {
        const newCard = document.createElement("section");
        counter++;
        newCard.classList.add("question_card");
        newCard.setAttribute("id", `card${counter}`);
        newCard.innerHTML = cardHTML;
        mainElement.append(newCard);
    });
    let allAnswerButtons = document.querySelectorAll(".answerbutton");
  }

  export function loadBookmarkedCard() {
    let bookmarksArray = JSON.parse(localStorage.getItem("bookmarkArray")) || [];
    bookmarksArray.forEach(cardHTML => {
        const newCard = document.createElement("section");
        counter++;
        newCard.classList.add("question_card");
        newCard.setAttribute("id", `card${counter}`);
        newCard.innerHTML = cardHTML;
        mainElement.append(newCard);
    });
    let allAnswerButtons = document.querySelectorAll(".answerbutton");
  }

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
  
  