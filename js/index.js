//loads dark mode

const bodyElement = document.querySelector('[data-js="body"]');

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElement.classList.add("dark");
  } else {
    bodyElement.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", loadDarkMode);


//Function for creating local file that de-/activates a bookmark

function toggleBookmark() {
  const Bookmark = localStorage.getItem("Bookmark");
  if (Bookmark === "activated") {
    localStorage.setItem("Bookmark", "deactivated");
  } else {
    localStorage.setItem("Bookmark", "activated");
  }
}

//Function that looks at the local file and changes the bookmark color depending on its state

function loadBookmark() {
  const Bookmark = localStorage.getItem("Bookmark");
  if (Bookmark === "activated") {
    bookmarkBlackElement.classList.remove("hidden");
  } else {
    bookmarkBlackElement.classList.add("hidden");
  }
}

//Creating an Element for the unbookmarked logo and the bookmarked logo

const bookmarkElement = document.querySelector('[data-js="bookmark-button"]');
const bookmarkBlackElement = document.querySelector('[data-js="bookmark-button-black"]');

//toggles the display of each logo and de-/activates a bookmark

bookmarkElement.addEventListener("click", () => {
  bookmarkBlackElement.classList.toggle("hidden")
  toggleBookmark()
})

bookmarkBlackElement.addEventListener("click", () => {
  bookmarkBlackElement.classList.toggle("hidden")
  toggleBookmark()
})

//toggles the display of each logo of the second bookmark, without actually saving anything locally

const bookmark2Element = document.querySelector('[data-js="bookmark2-button"]');
const bookmark2BlackElement = document.querySelector('[data-js="bookmark2-button-black"]');

bookmark2Element.addEventListener("click", () => {
  bookmark2BlackElement.classList.toggle("hidden")
})

bookmark2BlackElement.addEventListener("click", () => {
  bookmark2BlackElement.classList.toggle("hidden")
})

//loads the state of the first bookmark upon opening the page

document.addEventListener("DOMContentLoaded", loadBookmark)


//creating a new card


const newCardButton = document.querySelector('[data-js="card-button"]');
const mainElement = document.querySelector("main");
const popupElement = document.querySelector('[data-js="popup"]');
const popupQuestion = document.querySelector('[data-js="popupQuestion"]');
const popupAnswer = document.querySelector('[data-js="popupAnswer"]');
const popupHash = document.querySelector('[data-js="popupHash"]');
const popupSubmitButton = document.querySelector('[data-js="popupSubmit"]');



newCardButton.addEventListener("click", () => {
  popupElement.classList.toggle("hidden");
})

popupSubmitButton.addEventListener("click", (event) => {
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
          <button>${popupHash.value}</button>
        </div>
        <img class="icon" alt="Bookmark Icon" src="assets/bookmark.png"/>
        <img class="icon hidden" alt="Bookmark Icon" src="assets/bookmark black.png"/>
  `;
  mainElement.append(newCard)
  popupElement.classList.toggle("hidden");
})


// adding character limits

const popupQuestionLimit = document.querySelector('[data-js="questionlimit"]');
const popupAnswerLimit = document.querySelector('[data-js="answerlimit"]');
const popupHashtagLimit = document.querySelector('[data-js="hashtaglimit"]');

popupQuestion.addEventListener("input", () => {
  popupQuestionLimit.textContent = 150 - popupQuestion.value.length;
})

popupAnswer.addEventListener("input", () => {
  popupAnswerLimit.textContent = 150 - popupAnswer.value.length;
})

popupHash.addEventListener("input", () => {
  popupHashtagLimit.textContent = 150 - popupHash.value.length;
})