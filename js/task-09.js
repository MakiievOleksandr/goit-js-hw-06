function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;

const textEl = document.querySelector('.color');

const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onClickBtn);

function onClickBtn(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}
