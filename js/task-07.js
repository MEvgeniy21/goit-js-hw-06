const refs = {
  input: document.querySelector('[id="font-size-control"]'),
  text: document.querySelector('[id="text"]'),
};

changeTextFS(refs.input.value);
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  changeTextFS(event.currentTarget.value);
}

function changeTextFS(value) {
  refs.text.style.fontSize = `${value}px`;
}
