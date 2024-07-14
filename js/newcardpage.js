import { loadCard } from "../Cards/Cards.js";
import { addAnswerButtonListeners } from "../Cards/Cards.js";
import { loadDarkMode } from "../Colormodes/colormodes.js";
import { loadCrazyMode } from "../Colormodes/colormodes.js";
import { addBookmarkListeners } from "../Bookmarks/bookmarks.js";
import { bodyElement, questionInput, answerInput, hashInput, QuestionLimit, AnswerLimit, HashtagLimit, mainElement, formElement, clearButton } from "../lib/data.js";

function lengthChecker(inputfield, limittext) {
    inputfield.addEventListener("input", () => {
    limittext.textContent = 100 - inputfield.value.length;
  })
}

lengthChecker(questionInput,QuestionLimit);
lengthChecker(answerInput,AnswerLimit);
lengthChecker(hashInput,HashtagLimit);

// popupQuestion.addEventListener("input", () => {
//   popupQuestionLimit.textContent = 150 - popupQuestion.value.length;
// })

// popupAnswer.addEventListener("input", () => {
//   popupAnswerLimit.textContent = 150 - popupAnswer.value.length;
// })

// popupHash.addEventListener("input", () => {
//   popupHashtagLimit.textContent = 150 - popupHash.value.length;
// })


//adding cards

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!localStorage.getItem("Counter")) {
      localStorage.setItem("Counter", "3");
    }
    let counter = parseInt(localStorage.getItem("Counter"));
    console.log("Counter: ", counter);
    const newCard = document.createElement("section");
    newCard.classList.add("question_card");
    newCard.setAttribute("id", `card${counter}`);
    newCard.innerHTML = `
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
    `;
    mainElement.append(newCard);
    counter++;
    localStorage.setItem("Counter", counter);
    let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
    cardsArray.push(newCard.innerHTML);
    localStorage.setItem("cardsArray", JSON.stringify(cardsArray));
    addAnswerButtonListeners();
    addBookmarkListeners();
    clearContent();
    QuestionLimit.textContent = AnswerLimit.textContent = HashtagLimit.textContent = 100;
  })

function clearContent() {
  questionInput.value = "";
  answerInput.value = "";
  hashInput.value = "";
  QuestionLimit.textContent = AnswerLimit.textContent = HashtagLimit.textContent = 100;
}

clearButton.addEventListener("click", () => clearContent())

document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadCrazyMode();
  loadCard();
  addAnswerButtonListeners();
  addBookmarkListeners();
});