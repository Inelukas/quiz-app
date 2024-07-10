// adding character limits

const questionInput = document.querySelector('[data-js="Question"]');
const answerInput = document.querySelector('[data-js="Answer"]');
const hashInput = document.querySelector('[data-js="Hash"]');
const QuestionLimit = document.querySelector('[data-js="questionlimit"]');
const AnswerLimit = document.querySelector('[data-js="answerlimit"]');
const HashtagLimit = document.querySelector('[data-js="hashtaglimit"]');

function lengthChecker(inputfield, limittext) {
    inputfield.addEventListener("input", () => {
    limittext.textContent = 150 - inputfield.value.length;
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

const mainElement = document.querySelector("main");
const submitButton = document.querySelector('[data-js="submitButton"]');
const clearButton = document.querySelector('[data-js="clearButton"]');

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (questionInput.value != "" && answerInput.value != "") {
    const newCard = document.createElement("section");
    newCard.classList.add("question_card");
    newCard.innerHTML = `
          <h2>
            ${questionInput.value}
          </h2>
          <button class="answerbutton" data-js="answer2button">Show Answer</button>
          <h2 class="answer">${answerInput.value}</h2>
          <div class="hashtags">
            <button>${hashInput.value}</button>
          </div>
          <img class="icon" alt="Bookmark Icon" src="assets/bookmark.png"/>
          <img class="icon hidden" alt="Bookmark Icon" src="assets/bookmark black.png"/>
    `;
    mainElement.append(newCard)
    clearContent()
    }else{
      alert("The question and answer fields mustn't be empty!")
    }
  })

function clearContent() {
  questionInput.value = "";
  answerInput.value = "";
  hashInput.value = "";
}

clearButton.addEventListener("click", () => clearContent())