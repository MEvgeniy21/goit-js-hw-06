const refs = {
  body: document.body,
  colorValue: document.querySelector(".widget .color"),
  btnChangeColor: document.querySelector(".widget .change-color"),
};

refs.btnChangeColor.addEventListener("click", changeColorBG);

function changeColorBG() {
  changeColorValue();
  refs.body.style.backgroundColor = refs.colorValue.textContent;
}

function changeColorValue() {
  refs.colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
