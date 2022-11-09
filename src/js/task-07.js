const sizeControllerEl = document.querySelector('#font-size-control');
console.log(sizeControllerEl);

const textEl = document.querySelector('#text');
console.log(textEl);

sizeControllerEl.addEventListener('input', (event) => {
  const rangeValue = event.currentTarget.value;
  textEl.style.fontSize = rangeValue.toString() + 'px';
});
