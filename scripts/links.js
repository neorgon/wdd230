let baseURL = '';
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  baseURL = 'http://127.0.0.1:5500/';
}
else {
  baseURL = 'https://neorgon.github.io/wdd230/';
}
const linkList = `${baseURL}data/links.json`;
const activities = document.getElementById('activities');

const getLinks =  async () => {
  const response = await fetch(linkList);
  const data = await response.json();
  console.log(data.lessons);
  displayActivities(data.lessons);
}

getLinks();

const displayActivities = (lessons) => {
  lessons.forEach(activity => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    
    span.textContent = `${activity.lesson}: `;
    li.appendChild(span);

    let urls = activity.links.map(link => {
      let url = document.createElement('a');

      url.href = link.url;
      url.title = link.title;
      url.innerText = link.title;

      return url.outerHTML;
    }).join(' | ');

    li.innerHTML += urls;

    activities.appendChild(li);
  });
}