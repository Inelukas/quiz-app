//function to load new card

let counter = 2;

function loadCard() {
    let cardsArray = JSON.parse(localStorage.getItem("cardsArray")) || [];
    cardsArray.forEach(cardHTML => {
        const newCard = document.createElement("section");
        counter++;
        newCard.classList.add("question_card");
        newCard.setAttribute("id", `card${counter}`);
        newCard.innerHTML = cardHTML;
        mainElement.append(newCard);
    });
    allAnswerButtons = document.querySelectorAll(".answerbutton");
  }

  document.addEventListener("DOMContentLoaded", loadCard)