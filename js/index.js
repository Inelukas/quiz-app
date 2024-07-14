import { addWhiteBookmarkListeners } from "./bookmarks.js";
import { addBlackBookmarkListeners } from "./bookmarks.js";
import { addBookmarkListeners } from "./bookmarks.js";
import { addAnswerButtonListeners } from "./toggle-answer.js";
import { loadCard } from "./loadNewCard.js";

document.addEventListener("DOMContentLoaded", loadCard)
document.addEventListener("DOMContentLoaded", addBookmarkListeners);
// document.addEventListener("DOMContentLoaded", addAnswerButtonListeners);