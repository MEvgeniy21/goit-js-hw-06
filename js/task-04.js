const refsCounter = {
  valueEl: document.querySelector("[id='counter'] [id='value']"),
  decrementEl: document.querySelector(
    "[id='counter'] [data-action='decrement']"
  ),
  incrementEl: document.querySelector(
    "[id='counter'] [data-action='increment']"
  ),
};

let counterValue = 0;

refsCounter.decrementEl.addEventListener("click", onClickDecrement);
refsCounter.incrementEl.addEventListener("click", onClickIncrement);

function onClickDecrement() {
  counterValue -= 1;
  changeValue();
}

function onClickIncrement() {
  counterValue += 1;
  changeValue();
}

function changeValue() {
  refsCounter.valueEl.textContent = counterValue;
}
