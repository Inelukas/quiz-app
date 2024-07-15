import { bodyElement, mainElement } from "../lib/data.js";
import { addBookmarkListeners } from "../Bookmarks/bookmarks.js";


export function loadCard() {
  if (bodyElement.id === "mainpage") {
    let fetchedCardsArray = JSON.parse(localStorage.getItem("fetchedCardsArray")) || [];
    fetchedCardsArray.forEach(cardHTML => {
        const newCard = document.createElement("div");
        newCard.innerHTML = cardHTML;
        mainElement.append(newCard);
  })
}
    let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
    cardsArray.forEach(cardHTML => {
        const newCard = document.createElement("div");
        newCard.innerHTML = cardHTML;
        mainElement.append(newCard);
    });
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
  
  export async function fetchAndRenderCardContent() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy");
    const data = await response.json();
    const results = data.results;
    const dataArray = results.forEach((item) => {
      const questionData = item.question;
      const answerData = item.correct_answer;
      const newCard = document.createElement("div");
      let counter = JSON.parse(localStorage.getItem("Counter")) || ["2"];
      counter++;
    newCard.innerHTML = `
          <section class="question_card" id="card${counter}">
          <h2>
            ${questionData}
          </h2>
          <button class="answerbutton" id="#card${counter}">Show Answer</button>
          <h2 class="answer hidden" data-js="answer">${answerData}</h2>
          <img class="icon" alt="Bookmark Icon" src="assets/bookmark.png" id="#card${counter}" data-js="bookmark-button-white"/>
          <img class="icon hidden" alt="Bookmark Icon" src="assets/bookmark-black.png" id="#card${counter}" data-js="bookmark-button-black"/>
          </section>
    `;
    mainElement.append(newCard);
    localStorage.setItem("Counter", counter);
    let fetchedCardsArray = JSON.parse(localStorage.getItem("fetchedCardsArray")) || [];
    fetchedCardsArray.push(newCard.innerHTML);
    localStorage.setItem("fetchedCardsArray", JSON.stringify(fetchedCardsArray));
    addAnswerButtonListeners();
    addBookmarkListeners();
    })
  }