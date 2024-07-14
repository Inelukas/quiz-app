

//toggles the display of each logo and de-/activates a bookmark

export function addWhiteBookmarkListeners() {
  let AllWhiteBookmarkElements = document.querySelectorAll('[data-js="bookmark-white"]');

  AllWhiteBookmarkElements.forEach((whiteBookmark) => {
    if (!whiteBookmark.hasListener) {
    whiteBookmark.addEventListener("click", () => {
      const cardAttribute = whiteBookmark.getAttribute("id");
      const currentCard = document.querySelector(cardAttribute);
      const bookmarkWhiteElement = currentCard.querySelector('[data-js="bookmark-white"]');
      const bookmarkBlackElement = currentCard.querySelector('[data-js="bookmark-black"]');
      bookmarkWhiteElement.classList.toggle("hidden");
      bookmarkBlackElement.classList.toggle("hidden");
    });
    whiteBookmark.hasListener = true;
  }
  })
}

export function addBlackBookmarkListeners() {
  let AllBlackBookmarkElements = document.querySelectorAll('[data-js="bookmark-black"]');

  AllBlackBookmarkElements.forEach((blackBookmark) => {
    if (!blackBookmark.hasListener) {
    blackBookmark.addEventListener("click", () => {
      const cardAttribute = blackBookmark.getAttribute("id");
      const currentCard = document.querySelector(cardAttribute);
      const bookmarkWhiteElement = currentCard.querySelector('[data-js="bookmark-white"]');
      const bookmarkBlackElement = currentCard.querySelector('[data-js="bookmark-black"]');
      bookmarkBlackElement.classList.toggle("hidden");
      bookmarkWhiteElement.classList.toggle("hidden");
    });
    blackBookmark.hasListener = true;
  }
  })
}

export function addBookmarkListeners() {
  addWhiteBookmarkListeners()
  addBlackBookmarkListeners()
}

document.addEventListener("DOMContentLoaded", addBookmarkListeners);