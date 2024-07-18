import {
  addAnswerButtonListeners,
  loadCardsOnBookmarkPage,
  deleteButton,
} from "../Cards/Cards.js";
import { loadDarkMode } from "../Colormodes/colormodes.js";
import { loadCrazyMode } from "../Colormodes/colormodes.js";
import { addBookmarkListeners } from "../Bookmarks/bookmarks.js";

document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadCrazyMode();
  loadCardsOnBookmarkPage();
  addAnswerButtonListeners();
  addBookmarkListeners();
  deleteButton();
});
