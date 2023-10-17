const input = document.querySelector('#my-chapter');
const list = document.querySelector('#list');
const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', () => {
  if (input.value !== '')
  {
    const li = list.appendChild(document.createElement('li'));
    li.innerHTML = `${input.value} <button class="remove">❌</button>`;
    input.value = '';
  }
  input.focus();
});

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    event.target.parentElement.remove();
    input.focus();
  }
});