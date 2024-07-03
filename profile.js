const bodyElement = document.querySelector('[data-js="body"]')

const darkButton = bodyElement.querySelector('[data-js="darkbutton"]')

// const darkToggle= document.querySelector('[data-js="darkmode-toggled"]'); 


function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        bodyElement.classList.add('dark');
        darkButton.checked = true;
    } else {
        bodyElement.classList.remove('dark');
        darkButton.checked = false;
    }
}

function toggleDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        localStorage.setItem('darkMode', 'disabled');
        bodyElement.classList.remove('dark');
    } else {
        localStorage.setItem('darkMode', 'enabled');
        bodyElement.classList.add('dark');
    }
}

darkButton.addEventListener('click', toggleDarkMode);

window.addEventListener('DOMContentLoaded', loadDarkMode);