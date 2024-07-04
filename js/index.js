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