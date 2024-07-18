import { bodyElement, darkButton, crazyButton } from "../lib/data.js";

export function loadDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    bodyElement.classList.add("dark");
    if (darkButton) {
      darkButton.checked = true;
    }
  } else {
    bodyElement.classList.remove("dark");
    if (darkButton) {
      darkButton.checked = false;
    }
  }
}

export function loadCrazyMode() {
  const crazyMode = localStorage.getItem("crazyMode");
  if (crazyMode === "enabled") {
    bodyElement.classList.add("crazy");
    if (crazyButton) {
      crazyButton.checked = true;
    }
  } else {
    bodyElement.classList.remove("crazy");
    if (crazyButton) {
      crazyButton.checked = false;
    }
  }
}

//toggles dark/crazy mode upon clicking the button and saves the state in a local file

export function toggleDarkMode() {
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

export function toggleCrazyMode() {
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
