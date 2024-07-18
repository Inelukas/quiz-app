import {
  loadDarkMode,
  loadCrazyMode,
  toggleDarkMode,
  toggleCrazyMode,
} from "../Colormodes/colormodes.js";
import { bodyElement, darkButton, crazyButton } from "../lib/data.js";
import { loadNumbers } from "../ProfileNumbers/profilenumbers.js";

//activates the button upon click

darkButton.addEventListener("click", toggleDarkMode);
crazyButton.addEventListener("click", toggleCrazyMode);

//runs the above function upon entering the page

document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadCrazyMode();
  loadNumbers();
});
