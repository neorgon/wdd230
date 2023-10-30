const menu = document.getElementById('menu');
const hamburgerButton = document.querySelector('.hamburger-button');

const toggleMenu = () => {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
  } else {
    menu.classList.add('show-menu');
  }

}

hamburgerButton.addEventListener('click', toggleMenu);

const showNumberVisit = document.getElementById('visit');

let numVisit = Number(window.localStorage.getItem('wdd-visit')) || 0;

showNumberVisit.textContent = numVisit;
numVisit++;
localStorage.setItem('wdd-visit', numVisit);