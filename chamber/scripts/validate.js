const validPosition = /^[a-zA-Z- ]{7,}$/g;
const position = document.getElementById('position');

position.addEventListener('keyup', (event) => {
  if (validPosition.exec(event.target.value) === null)
    event.target.classList = 'red';
  else
    event.target.classList = 'green';
});