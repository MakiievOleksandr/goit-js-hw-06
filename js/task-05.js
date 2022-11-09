const inputFieldEl = document.querySelector('#name-input');
console.log(inputFieldEl);

const outputFieldEl = document.querySelector('#name-output');
console.log(outputFieldEl);

inputFieldEl.addEventListener('input', (event) => {
  outputFieldEl.textContent = event.currentTarget.value;
});
