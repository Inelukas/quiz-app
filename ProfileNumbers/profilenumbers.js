export function loadNumbers() {
    const cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
    const localBookmarks = JSON.parse(localStorage.getItem("Bookmarks")) || [];
    const questionNumber = document.querySelector(".question-number");
    const bookmarkNumber = document.querySelector(".bookmark-number");
    questionNumber.textContent = cardsArray.length;
    bookmarkNumber.textContent = localBookmarks.length;
}