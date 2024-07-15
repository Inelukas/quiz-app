import { loadCard } from "../Cards/Cards.js";
import { addAnswerButtonListeners, fetchAndRenderCardContent } from "../Cards/Cards.js";
import { loadDarkMode } from "../Colormodes/colormodes.js";
import { loadCrazyMode } from "../Colormodes/colormodes.js";
import { addBookmarkListeners } from "../Bookmarks/bookmarks.js";
import { fetchedCardsButton } from "../lib/data.js";


document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadCrazyMode();
  loadCard();
  addAnswerButtonListeners();
  addBookmarkListeners();
});

fetchedCardsButton.addEventListener("click", () => fetchAndRenderCardContent())