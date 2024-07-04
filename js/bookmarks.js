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

//calls the function above upon opening the page

document.addEventListener("DOMContentLoaded", loadBookmark)