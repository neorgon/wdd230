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