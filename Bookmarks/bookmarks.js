// export function loadBookmark() {
//   let allWhiteBookmarks = document.querySelectorAll('[data-js="bookmark-button-white"]');
//   let bookmarkArray = JSON.parse(localStorage.getItem("bookmarkArray")) || [];
//   bookmarkArray.forEach(whiteBookmark) => {
//     const Bookmark = localStorage.getItem("Bookmark");
//     if (Bookmark === "activated") {
//       Card1.classList.remove("hidden");
//     } else {
//       Card1.classList.add("hidden");
//     }
//   }
//   };
//   allAnswerButtons = document.querySelectorAll(".answerbutton");
// }

export function addBookmarkListeners() {
  let allWhiteBookmarks = document.querySelectorAll('[data-js="bookmark-button-white"]');
  let allBlackBookmarks = document.querySelectorAll('[data-js="bookmark-button-black"]');

  allWhiteBookmarks.forEach((whiteBookmark) => {
    if (!whiteBookmark.hasListener) {
      whiteBookmark.addEventListener("click", () => {
      const cardAttribute = whiteBookmark.getAttribute("id");
      const currentCard = document.querySelector(cardAttribute);
      const currentWhiteBookmark = currentCard.querySelector('[data-js="bookmark-button-white"]');
      const currentBlackBookmark = currentCard.querySelector('[data-js="bookmark-button-black"]');
      currentWhiteBookmark.classList.toggle("hidden");
      currentBlackBookmark.classList.toggle("hidden");
    });
    whiteBookmark.hasListener = true;
  }
  })

  allBlackBookmarks.forEach((blackBookmark) => {
    if (!blackBookmark.hasListener) {
      blackBookmark.addEventListener("click", () => {
      const cardAttribute = blackBookmark.getAttribute("id");
      const currentCard = document.querySelector(cardAttribute);
      const currentWhiteBookmark = currentCard.querySelector('[data-js="bookmark-button-white"]');
      const currentBlackBookmark = currentCard.querySelector('[data-js="bookmark-button-black"]');
      currentWhiteBookmark.classList.toggle("hidden");
      currentBlackBookmark.classList.toggle("hidden");
    });
    blackBookmark.hasListener = true;
  }
  })
}






// //creates an element for the first card (card is invisible in its unbookmarked state)

// const Card1 = document.querySelector('[data-js="card1"]');

// //hides or shows the card depending on its state

// function loadBookmark() {
//   const Bookmark = localStorage.getItem("Bookmark");
//   if (Bookmark === "activated") {
//     Card1.classList.remove("hidden");
//   } else {
//     Card1.classList.add("hidden");
//   }
// }

// //removes the bookmark upon clicking the black bookmark button

// function toggleBookmark() {
//   const Bookmark = localStorage.getItem("Bookmark");
//   if (Bookmark === "activated") {
//     localStorage.setItem("Bookmark", "deactivated");
//     loadBookmark();
//   } else {
//     localStorage.setItem("Bookmark", "activated");
//   }
// }

// const bookmarkBlackElement = document.querySelector('[data-js="bookmark-button-black"]');

// bookmarkBlackElement.addEventListener("click", () => {
//   toggleBookmark()
// })