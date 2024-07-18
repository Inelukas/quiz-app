import { mainElement, bodyElement } from "../lib/data.js";
import { loadCardsOnBookmarkPage } from "../Cards/Cards.js";

export function loadBookmark() {
  let allCards = document.querySelectorAll(".question_card");
  let localBookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];
  allCards.forEach((card) => {
    const cardAttribute = card.getAttribute("id");
    if (localBookmarks.includes(`#${cardAttribute}`)) {
      const currentWhiteBookmark = card.querySelector(
        '[data-js="bookmark-button-white"]'
      );
      const currentBlackBookmark = card.querySelector(
        '[data-js="bookmark-button-black"]'
      );
      currentWhiteBookmark.classList.toggle("hidden");
      currentBlackBookmark.classList.toggle("hidden");
    }
  });
  let allWhiteBookmarks = document.querySelectorAll(
    '[data-js="bookmark-button-white"]'
  );
  let bookmarkArray = JSON.parse(localStorage.getItem("bookmarkArray")) || [];
  bookmarkArray.forEach((whiteBookmark) => {
    const Bookmark = localStorage.getItem("Bookmark");
    if (Bookmark === "activated") {
      Card1.classList.remove("hidden");
    } else {
      Card1.classList.add("hidden");
    }
  });
}

export function addBookmarkListeners() {
  let allWhiteBookmarks = document.querySelectorAll(
    '[data-js="bookmark-button-white"]'
  );
  let allBlackBookmarks = document.querySelectorAll(
    '[data-js="bookmark-button-black"]'
  );

  allWhiteBookmarks.forEach((whiteBookmark) => {
    if (!whiteBookmark.hasListener) {
      whiteBookmark.addEventListener("click", () => {
        const cardAttribute = whiteBookmark.getAttribute("id");
        const currentCard = document.querySelector(cardAttribute);
        const currentWhiteBookmark = currentCard.querySelector(
          '[data-js="bookmark-button-white"]'
        );
        const currentBlackBookmark = currentCard.querySelector(
          '[data-js="bookmark-button-black"]'
        );
        currentWhiteBookmark.classList.toggle("hidden");
        currentBlackBookmark.classList.toggle("hidden");
        let localBookmarks =
          JSON.parse(localStorage.getItem("Bookmarks")) || [];
        localBookmarks.push(cardAttribute);
        localStorage.setItem("Bookmarks", JSON.stringify(localBookmarks));
      });
      whiteBookmark.hasListener = true;
    }
  });

  allBlackBookmarks.forEach((blackBookmark) => {
    if (!blackBookmark.hasListener) {
      blackBookmark.addEventListener("click", () => {
        const cardAttribute = blackBookmark.getAttribute("id");
        const currentCard = document.querySelector(cardAttribute);
        const currentWhiteBookmark = currentCard.querySelector(
          '[data-js="bookmark-button-white"]'
        );
        const currentBlackBookmark = currentCard.querySelector(
          '[data-js="bookmark-button-black"]'
        );
        currentWhiteBookmark.classList.toggle("hidden");
        currentBlackBookmark.classList.toggle("hidden");
        let localBookmarks =
          JSON.parse(localStorage.getItem("Bookmarks")) || [];
        const arrayWithoutCurrentBookmark = localBookmarks.filter(
          (number) => number != cardAttribute
        );
        localStorage.setItem(
          "Bookmarks",
          JSON.stringify(arrayWithoutCurrentBookmark)
        );
        if (bodyElement.id === "bookmarkspage") {
          currentCard.classList.add("hidden");
        }
      });
      blackBookmark.hasListener = true;
    }
  });
}