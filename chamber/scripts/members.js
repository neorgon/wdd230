const url = 'http://127.0.0.1:5500/chamber/data/members.json';
const directory = document.getElementById('directory');

const getMembers = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.members);
  displayMembers(data.members);
}

getMembers();

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

const displayMembers = async (members) => {
  
  await members.forEach(company => {
    let card = document.createElement('div');
    let title = document.createElement('div');
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
    title.classList.add('card-title');
    bodyCard.classList.add('body-card');
    title.textContent = company.name;
    description.textContent = company.description;
    address.appendChild(iconSpanAddress);
    address.appendChild(document.createTextNode(company.address));
    phone.appendChild(iconSpanPhone);
    phone.appendChild(document.createTextNode(company.phone));
    url.textContent = 'Details';
    url.href = company.url;
    details.appendChild(url);
    img.setAttribute('src', company.img);
    img.setAttribute('alt', company.name);
    bodyCard.appendChild(img);
    bodyCard.appendChild(description);
    bodyCard.appendChild(address);
    bodyCard.appendChild(phone);
    bodyCard.appendChild(details);
    card.appendChild(title);
    card.appendChild(bodyCard);
    directory.appendChild(card);
  });
}