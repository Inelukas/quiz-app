import { loadCard, deleteButton } from "../Cards/Cards.js";
import { addAnswerButtonListeners } from "../Cards/Cards.js";
import { loadDarkMode } from "../Colormodes/colormodes.js";
import { loadCrazyMode } from "../Colormodes/colormodes.js";
import { addBookmarkListeners, loadBookmark } from "../Bookmarks/bookmarks.js";
import {
  bodyElement,
  questionInput,
  answerInput,
  hashInput,
  QuestionLimit,
  AnswerLimit,
  HashtagLimit,
  mainElement,
  formElement,
  clearFormButton,
  popupElement,
  confirmButton,
  cancelButton,
} from "../lib/data.js";

function lengthChecker(inputfield, limittext) {
  if (inputfield === hashInput) {
    inputfield.addEventListener("input", () => {
      limittext.textContent = 50 - inputfield.value.length;
    });
  } else {
    inputfield.addEventListener("input", () => {
      limittext.textContent = 100 - inputfield.value.length;
    });
  }
}

lengthChecker(questionInput, QuestionLimit);
lengthChecker(answerInput, AnswerLimit);
lengthChecker(hashInput, HashtagLimit);

//adding cards

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let counter = JSON.parse(localStorage.getItem("Counter")) || [];
  // if (!localStorage.getItem("Counter")) {
  //   localStorage.setItem("Counter", "3");
  // }
  // let counter = parseInt(localStorage.getItem("Counter"));
  const newCard = document.createElement("div");
  counter++;
  newCard.innerHTML = `
          <section class="question_card" id="card${counter}">
          <h2>
            ${questionInput.value}
          </h2>
          <button class="answerbutton" id="#card${counter}">Show Answer</button>
          <h2 class="answer hidden" data-js="answer">${answerInput.value}</h2>
          <div class="hashtags">
            <span>${hashInput.value}</span>
          </div>
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
  addAnswerButtonListeners();
  addBookmarkListeners();
  deleteButton();
  clearContent();
  QuestionLimit.textContent = AnswerLimit.textContent = 100;
  HashtagLimit.textContent = 50;
});

function clearContent() {
  questionInput.value = "";
  answerInput.value = "";
  hashInput.value = "";
  QuestionLimit.textContent = AnswerLimit.textContent = 100;
  HashtagLimit.textContent = 50;
}

clearFormButton.addEventListener("click", () => clearContent());

document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadCrazyMode();
  loadCard();
  addAnswerButtonListeners();
  addBookmarkListeners();
  loadBookmark();
  deleteButton();
});
