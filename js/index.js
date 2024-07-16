import { loadCard, firstCardLoad } from "../Cards/Cards.js";
import { addAnswerButtonListeners, fetchAndRenderCardContent } from "../Cards/Cards.js";
import { loadDarkMode } from "../Colormodes/colormodes.js";
import { loadCrazyMode } from "../Colormodes/colormodes.js";
import { addBookmarkListeners, loadBookmark } from "../Bookmarks/bookmarks.js";
import { fetchedCardsButton } from "../lib/data.js";


document.addEventListener("DOMContentLoaded", () => {
  loadDarkMode();
  loadCrazyMode();
  firstCardLoad();
  loadCard();
  addAnswerButtonListeners();
  addBookmarkListeners();
  loadBookmark();
});

fetchedCardsButton.addEventListener("click", () => fetchAndRenderCardContent())