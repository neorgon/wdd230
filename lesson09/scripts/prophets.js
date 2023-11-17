const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphetList(data.prophets);
}

getProphetData();

const displayProphetList = (prophets) => {
  prophets.forEach(prophet => {
    let card = document.createElement('section');
    let titleName = document.createElement('h1');
    let portrait = document.createElement('img');

    titleName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of prophet ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(titleName);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};