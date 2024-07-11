//loads dark or crazy mode

const bodyElement = document.querySelector('[data-js="body"]');

function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElement.classList.add("dark");
  } else {
    bodyElement.classList.remove("dark");
  }
}

function loadCrazyMode() {
  const crazyMode = localStorage.getItem("crazyMode");
  if (crazyMode === "enabled") {
    bodyElement.classList.add("crazy");
  } else {
    bodyElement.classList.remove("crazy");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadCrazyMode();
});