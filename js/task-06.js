const inputFildEl = document.querySelector('#validation-input');

inputFildEl.addEventListener('blur', (event) => {
  if (
    event.currentTarget.value.length < inputFildEl.dataset.length ||
    event.currentTarget.value.length > inputFildEl.dataset.length
  ) {
    inputFildEl.classList.add('invalid');
  } else {
    inputFildEl.classList.remove('invalid');
    inputFildEl.classList.add('valid');
  }
});
