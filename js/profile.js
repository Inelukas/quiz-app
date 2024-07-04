//checks the local storage and de-/activates dark mode un-/toggles the button

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElement.classList.add("dark");
    darkButton.checked = true;
  } else {
    bodyElement.classList.remove("dark");
    darkButton.checked = false;
  }
}

//toggles dark mode upon clicking the button and saves the state in a local file

function toggleDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    localStorage.setItem("darkMode", "disabled");
    bodyElement.classList.remove("dark");
  } else {
    localStorage.setItem("darkMode", "enabled");
    bodyElement.classList.add("dark");
  }
}

//creates one body element and one button element

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = bodyElement.querySelector('[data-js="darkbutton"]');

//activates the button upon click

darkButton.addEventListener("click", toggleDarkMode);

//runs the above function upon entering the page

document.addEventListener("DOMContentLoaded", loadDarkMode);
