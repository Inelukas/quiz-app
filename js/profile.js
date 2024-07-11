//checks the local storage and de-/activates dark/crazy or mode un-/toggles the button

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

function loadCrazyMode() {
  const crazyMode = localStorage.getItem("crazyMode");
  if (crazyMode === "enabled") {
    bodyElement.classList.add("crazy");
    crazyButton.checked = true;
  } else {
    bodyElement.classList.remove("crazy");
    crazyButton.checked = false;
  }
}

//toggles dark/crazy mode upon clicking the button and saves the state in a local file

function toggleDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    localStorage.setItem("darkMode", "disabled");
    bodyElement.classList.remove("dark");
  } else {
    localStorage.setItem("darkMode", "enabled");
    localStorage.setItem("crazyMode", "disabled");
    bodyElement.classList.add("dark");
    bodyElement.classList.remove("crazy");
    crazyButton.checked = false;
  }
}

function toggleCrazyMode() {
  const crazyMode = localStorage.getItem("crazyMode");
  if (crazyMode === "enabled") {
    localStorage.setItem("crazyMode", "disabled");
    bodyElement.classList.remove("crazy");
  } else {
    localStorage.setItem("crazyMode", "enabled");
    localStorage.setItem("darkMode", "disabled");
    bodyElement.classList.add("crazy");
    bodyElement.classList.remove("dark");
    darkButton.checked = false;
  }
}

//creates one body element and one button element

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = bodyElement.querySelector('[data-js="darkbutton"]');
const crazyButton = bodyElement.querySelector('[data-js="crazybutton"]');

//activates the button upon click

darkButton.addEventListener("click", toggleDarkMode);
crazyButton.addEventListener("click", toggleCrazyMode);

//runs the above function upon entering the page

document.addEventListener("DOMContentLoaded", loadDarkMode);
document.addEventListener("DOMContentLoaded", loadCrazyMode);
