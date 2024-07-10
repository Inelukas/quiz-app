//creates an element for the first card (card is invisible in its unbookmarked state)

const Card1 = document.querySelector('[data-js="card1"]');

//hides or shows the card depending on its state

function loadBookmark() {
  const Bookmark = localStorage.getItem("Bookmark");
  if (Bookmark === "activated") {
    Card1.classList.remove("hidden");
  } else {
    Card1.classList.add("hidden");
  }
}

//removes the bookmark upon clicking the black bookmark button

function toggleBookmark() {
  const Bookmark = localStorage.getItem("Bookmark");
  if (Bookmark === "activated") {
    localStorage.setItem("Bookmark", "deactivated");
    loadBookmark();
  } else {
    localStorage.setItem("Bookmark", "activated");
  }
}

const bookmarkBlackElement = document.querySelector('[data-js="bookmark-button-black"]');

bookmarkBlackElement.addEventListener("click", () => {
  toggleBookmark()
})

//calls the function above upon opening the page

document.addEventListener("DOMContentLoaded", loadBookmark)