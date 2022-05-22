const refs = {
  inputNum: document.querySelector("[id='controls'] input[type='number']"),
  create: document.querySelector("[id='controls'] [data-create]"),
  destroy: document.querySelector("[id='controls'] [data-destroy]"),
  box: document.querySelector("[id='boxes']"),
};

refs.create.addEventListener("click", onClickCreate);
refs.destroy.addEventListener("click", onClickDestroy);

function onClickCreate() {
  const amount = parseInt(refs.inputNum.value, 10);

  if (amount) {
    createBoxes(amount);
  }
}

function onClickDestroy() {
  refs.box.innerHTML = "";
}

function createBoxes(amount) {
  if (amount) {
    const arrayElements = [];

    for (let i = 0; i < amount; i += 1) {
      const element = document.createElement("div");
      const sizeEl = `${30 + i * 10}px`;
      element.style.width = sizeEl;
      element.style.height = sizeEl;
      element.style.backgroundColor = getRandomHexColor();
      arrayElements.push(element);
    }

    refs.box.append(...arrayElements);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
