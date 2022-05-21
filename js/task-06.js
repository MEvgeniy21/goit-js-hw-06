const inputEl = document.querySelector('[id="validation-input"]');

inputEl.addEventListener("blur", changeBorderColor);

function changeBorderColor(event) {
  const element = event.currentTarget;
  const dataLength = parseInt(element.dataset.length, 10);
  const inputLength = element.value.length;
  const onValid = inputLength >= dataLength;
  const CLASS_VALID = "valid";
  const CLASS_INVALID = "invalid";

  element.classList.add(onValid ? CLASS_VALID : CLASS_INVALID);
  element.classList.remove(onValid ? CLASS_INVALID : CLASS_VALID);
}
