//function to load new card

function loadCard() {
    const myNewCard = localStorage.getItem("NewCard")
    if (myNewCard) {
    const newCard = document.createElement("section")
    const newCardHTML = localStorage.getItem("NewCard");
    newCard.classList.add("question_card");
    newCard.innerHTML = newCardHTML;
    mainElement.append(newCard);
    }
  }

  document.addEventListener("DOMContentLoaded", loadCard)