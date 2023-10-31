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

let numVisit = Number(window.localStorage.getItem('chamber-visit')) || 0;
let lastVisit = window.localStorage.getItem('last-visit') || Date.now();
const oneday = 60 * 60 * 24 * 1000
const timeBetween = Date.now() - lastVisit;
const daysAgo = Math.floor(timeBetween / oneday);
const withS = daysAgo == 1 ? 'day' : 'days';

if (numVisit == 0) 
  toShow = 'Welcome! Let us know if you have any questions.';
else 
  if (timeBetween <= oneday)
    toShow = 'Back so soon! Awesome!';
  else
    toShow = `You last visited ${daysAgo} ${withS} ago.`;

showNumberVisit.textContent = toShow;
numVisit++;
localStorage.setItem('chamber-visit', numVisit);
localStorage.setItem('last-visit', lastVisit);