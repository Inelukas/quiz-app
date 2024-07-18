import {
  bodyElement,
  mainElement,
  popupElement,
  cancelButton,
  confirmButton,
} from "../lib/data.js";
import { addBookmarkListeners, loadBookmark } from "../Bookmarks/bookmarks.js";

export function loadCard() {
  let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
  cardsArray.forEach((cardHTML) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = cardHTML;
    if (bodyElement.id === "formpage") {
      const sectionElement = newCard.querySelector("section");
      if (!sectionElement.classList.contains("fetched")) {
        mainElement.append(newCard);
      }
    } else {
      mainElement.append(newCard);
    }
  });
}

export function loadCardsOnBookmarkPage() {
  let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
  let localBookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];
  cardsArray.forEach((cardHTML) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = cardHTML;
    const currentCardSectionElement = newCard.querySelector("section");
    const cardAttribute = currentCardSectionElement.getAttribute("id");
    if (localBookmarks.includes(`#${cardAttribute}`)) {
      const currentWhiteBookmark = newCard.querySelector(
        '[data-js="bookmark-button-white"]'
      );
      const currentBlackBookmark = newCard.querySelector(
        '[data-js="bookmark-button-black"]'
      );
      currentWhiteBookmark.classList.toggle("hidden");
      currentBlackBookmark.classList.toggle("hidden");
      mainElement.append(newCard);
    }
  });
}

let currentCardToDelete = null;

export function deleteButton() {
  const alldeleteButtons = document.querySelectorAll(
    '[data-js="delete-button"]'
  );

  alldeleteButtons.forEach((deleteButton) => {
    if (!deleteButton.hasListener) {
      deleteButton.addEventListener("click", () => {
        currentCardToDelete = deleteButton;
        popupElement.classList.toggle("hidden");
      });
      deleteButton.hasListener = true;
    }
  });

  if (!cancelButton.hasListener) {
    cancelButton.addEventListener("click", () => {
      popupElement.classList.toggle("hidden");
      currentCardToDelete = null;
    });
    cancelButton.hasListener = true;
  }

  if (!confirmButton.hasListener) {
    confirmButton.addEventListener("click", () => {
      if (currentCardToDelete) {
        const cardAttribute = currentCardToDelete.getAttribute("id");
        const currentCard = document.querySelector(cardAttribute);
        let cardsArray = JSON.parse(localStorage.getItem("cardsArray"));
        const cardsArrayWithoutDeletedCard = cardsArray.filter((cardHTML) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = cardHTML;
          const cardSection = tempDiv.querySelector("section");
          return cardSection.id !== currentCard.id;
        });
        localStorage.setItem(
          "cardsArray",
          JSON.stringify(cardsArrayWithoutDeletedCard)
        );
        let localBookmarks =
          JSON.parse(localStorage.getItem("Bookmarks")) || [];
          if (localBookmarks.includes(cardAttribute)) {const arrayWithoutCurrentBookmark = localBookmarks.filter(
          (number) => number != cardAttribute
        );
        localStorage.setItem(
          "Bookmarks",
          JSON.stringify(arrayWithoutCurrentBookmark)
        );
      }
        currentCard.parentElement.remove();
        popupElement.classList.toggle("hidden");
        currentCardToDelete = null;
      }
    });
    confirmButton.hasListener = true;
  }
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
        } else {
          answerButton.textContent = "Show Answer";
        }
      });
      answerButton.hasListener = true;
    }
  });
}

export async function fetchAndRenderCardContent() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy"
  );
  const data = await response.json();
  const results = data.results;
  const dataArray = results.forEach((item) => {
    const questionData = item.question;
    const answerData = item.correct_answer;
    const newCard = document.createElement("div");
    let counter = JSON.parse(localStorage.getItem("Counter")) || [];
    counter++;
    newCard.innerHTML = `
          <section class="question_card fetched" id="card${counter}">
          <h2>
            ${questionData}
          </h2>
          <button class="answerbutton" id="#card${counter}">Show Answer</button>
          <h2 class="answer hidden" data-js="answer">${answerData}</h2>
          <img class="icon" alt="Bookmark Icon" src="assets/bookmark.png" id="#card${counter}" data-js="bookmark-button-white"/>
          <img class="icon hidden" alt="Bookmark Icon" src="assets/bookmark-black.png" id="#card${counter}" data-js="bookmark-button-black"/>
          <button class="delete-button" data-js="delete-button" id="#card${counter}">Delete</button>
          </section>
    `;
    mainElement.append(newCard);
    localStorage.setItem("Counter", counter);
    let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
    cardsArray.push(newCard.innerHTML);
    localStorage.setItem("cardsArray", JSON.stringify(cardsArray));
  });
  addAnswerButtonListeners();
  addBookmarkListeners();
  deleteButton();
}

export function firstCardLoad() {
  if (!localStorage.getItem("cardsArray")) {
    fetchAndRenderCardContent();
  }
}
