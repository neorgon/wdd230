const validPosition = /^[a-zA-Z- ]{7,}$/;
const position = document.getElementById('position');
const message = document.querySelector('.message');
const timestamp = document.getElementById('timestamp');
const submit = document.getElementById('submit');

position.addEventListener('keyup', (event) => {
  if (validPosition.exec(event.target.value) === null)
  {
    event.target.classList = 'red';
    message.style.display = 'block';
  }
  else
  {
    event.target.classList = 'green';
    message.style.display = 'none';
  }
});

submit.addEventListener('click', () => {
  date = new Date().now;
  timestamp.value = date;
})