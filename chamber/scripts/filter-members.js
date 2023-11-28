let baseURL = '';
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  baseURL = 'http://127.0.0.1:5500/';
}
else {
  baseURL = 'https://neorgon.github.io/wdd230/';
}

const url = `${baseURL}chamber/data/members.json`;
const filterDisplay = document.getElementById('filter-gold-members');

const filterGoldMembers = async() => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.members.filter(member => member.level == "Gold Membership"));
  displayFilter(data.members.filter(member => member.level == "Gold Membership"));
}

filterGoldMembers();

const createIconAddress = () => {
  let iconI = document.createElement('i');
  let iconImg = document.createElement('img');
  
  iconImg.setAttribute('alt', 'Location icon');
  iconImg.setAttribute('loading', 'lazy');
  iconImg.setAttribute('src', 'images/location-dot-solid.svg')
  iconI.classList.add('icon');
  iconI.appendChild(iconImg);
  return iconI;
}

const createIconPhone = () => {
  let iconI = document.createElement('i');
  let iconImg = document.createElement('img');
  
  iconImg.setAttribute('alt', 'Phone icon');
  iconImg.setAttribute('loading', 'lazy');
  iconImg.setAttribute('src', 'images/whatsapp-regular.svg')
  iconI.classList.add('icon');
  iconI.appendChild(iconImg);
  return iconI;
}

const displayFilter = (members) => {
  members.forEach(company => {
    let card = document.createElement('div');
    let headerCard = document.createElement('div');
    let bodyCard = document.createElement('div');
    let img = document.createElement('img');
    let description = document.createElement('p');
    let details = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');
    let iconSpanAddress = document.createElement('span');
    let iconSpanPhone = document.createElement('span');

    iconSpanAddress.appendChild(createIconAddress());
    iconSpanPhone.appendChild(createIconPhone());
    card.classList.add('card');
    headerCard.classList.add('header-card');
    bodyCard.classList.add('body-card');
    description.classList.add('description');
    img.setAttribute('src', company.img);
    img.setAttribute('alt', company.name);
    headerCard.appendChild(img);
    description.textContent = company.description;
    address.appendChild(iconSpanAddress);
    address.appendChild(document.createTextNode(company.address));
    phone.appendChild(iconSpanPhone);
    phone.appendChild(document.createTextNode(company.phone));
    url.textContent = 'Details';
    url.href = company.url;
    url.classList.add('button');
    details.appendChild(url);
    bodyCard.appendChild(description);
    bodyCard.appendChild(address);
    bodyCard.appendChild(phone);
    bodyCard.appendChild(details);
    card.appendChild(headerCard);
    card.appendChild(bodyCard);
    filterDisplay.appendChild(card);
  });
}