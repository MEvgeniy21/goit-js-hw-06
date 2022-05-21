const refs = {
  input: document.querySelector("[id='name-input']"),
  output: document.querySelector("[id='name-output']"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const EMPTY_INPUT = "Anonymous";
  const inputVal = event.currentTarget.value;

  refs.output.textContent = !inputVal ? EMPTY_INPUT : inputVal;
}
