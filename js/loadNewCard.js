//function to load new card

function loadCard() {
    let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];


    cardsArray.forEach(cardHTML => {
        const newCard = document.createElement("section");
        newCard.classList.add("question_card");
        newCard.innerHTML = cardHTML;
        mainElement.append(newCard);
    });
  }

  document.addEventListener("DOMContentLoaded", loadCard)