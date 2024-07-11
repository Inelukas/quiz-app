//creating a new card


const newCardButton = document.querySelector('[data-js="card-button"]');
const mainElement = document.querySelector("main");
const formElement = document.querySelector('[data-js="addcard-form"]');
const popupElement = document.querySelector('[data-js="popup"]');
const popupQuestion = document.querySelector('[data-js="popupQuestion"]');
const popupAnswer = document.querySelector('[data-js="popupAnswer"]');
const popupHash = document.querySelector('[data-js="popupHash"]');
const popupSubmitButton = document.querySelector('[data-js="popupSubmit"]');
const popupCancelButton = document.querySelector('[data-js="popupCancel"]');



newCardButton.addEventListener("click", () => {
  popupElement.classList.toggle("hidden");
  popupQuestion.value = "";
  popupAnswer.value = "";
  popupHash.value = "";
})

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCard = document.createElement("section");
  newCard.classList.add("question_card");
  newCard.innerHTML = `
        <h2>
          ${popupQuestion.value}
        </h2>
        <button class="answerbutton" data-js="answer2button">Show Answer</button>
        <h2 class="answer">${popupAnswer.value}</h2>
        <div class="hashtags">
          <span>${popupHash.value}</span>
        </div>
        <img class="icon" alt="Bookmark Icon" src="assets/bookmark.png"/>
        <img class="icon hidden" alt="Bookmark Icon" src="assets/bookmark black.png"/>
  `;
  mainElement.append(newCard)
  popupQuestionLimit.textContent = popupAnswerLimit.textContent = popupHashtagLimit.textContent = 100;
  popupElement.classList.toggle("hidden");
})

popupCancelButton.addEventListener("click", () => {
  popupElement.classList.toggle("hidden");
  popupQuestionLimit.textContent = popupAnswerLimit.textContent = popupHashtagLimit.textContent = 100;
})


// adding character limits

const popupQuestionLimit = document.querySelector('[data-js="questionlimit"]');
const popupAnswerLimit = document.querySelector('[data-js="answerlimit"]');
const popupHashtagLimit = document.querySelector('[data-js="hashtaglimit"]');

function lengthChecker(inputfield, limittext) {
  inputfield.addEventListener("input", () => {
    limittext.textContent = 100 - inputfield.value.length;
  })
}

lengthChecker(popupQuestion,popupQuestionLimit);
lengthChecker(popupAnswer,popupAnswerLimit);
lengthChecker(popupHash,popupHashtagLimit);

// popupQuestion.addEventListener("input", () => {
//   popupQuestionLimit.textContent = 150 - popupQuestion.value.length;
// })

// popupAnswer.addEventListener("input", () => {
//   popupAnswerLimit.textContent = 150 - popupAnswer.value.length;
// })

// popupHash.addEventListener("input", () => {
//   popupHashtagLimit.textContent = 150 - popupHash.value.length;
// })
