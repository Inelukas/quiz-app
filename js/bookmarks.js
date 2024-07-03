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
