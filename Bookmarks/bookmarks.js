import { mainElement, bodyElement } from "../lib/data.js";
import { loadCardsOnBookmarkPage } from "../Cards/Cards.js";

export function loadBookmark() {
  let allCards = document.querySelectorAll(".question_card");
  let localBookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];
  console.log(localBookmarks)
  allCards.forEach((card) => {
    const cardAttribute = card.getAttribute("id");
    console.log(cardAttribute)
    if (localBookmarks.includes(`#${cardAttribute}`)) {
      const currentWhiteBookmark = card.querySelector('[data-js="bookmark-button-white"]');
      const currentBlackBookmark = card.querySelector('[data-js="bookmark-button-black"]');
      currentWhiteBookmark.classList.toggle("hidden");
      currentBlackBookmark.classList.toggle("hidden");
    }
  })
  let allWhiteBookmarks = document.querySelectorAll('[data-js="bookmark-button-white"]');
  let bookmarkArray = JSON.parse(localStorage.getItem("bookmarkArray")) || [];
  bookmarkArray.forEach((whiteBookmark) => {
    const Bookmark = localStorage.getItem("Bookmark");
    if (Bookmark === "activated") {
      Card1.classList.remove("hidden");
    } else {
      Card1.classList.add("hidden");
    }
  })
  };

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
      let localBookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];
      localBookmarks.push(cardAttribute);
      localStorage.setItem("Bookmarks", JSON.stringify(localBookmarks));
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
      let localBookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];
      const arrayWithoutCurrentBookmark = localBookmarks.filter((number) => number != cardAttribute);
      localStorage.setItem("Bookmarks", JSON.stringify(arrayWithoutCurrentBookmark));
      if (bodyElement.id === "bookmarkspage") {
        currentCard.classList.add("hidden");
      }
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