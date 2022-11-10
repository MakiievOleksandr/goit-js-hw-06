const inputFieldEl = document.querySelector('#name-input');

const outputFieldEl = document.querySelector('#name-output');

inputFieldEl.addEventListener('input', (event) => {
  if (event.currentTarget.value.trim() === '') {
    outputFieldEl.textContent = 'Anonymous';
  } else {
    outputFieldEl.textContent = event.currentTarget.value;
  }
});
