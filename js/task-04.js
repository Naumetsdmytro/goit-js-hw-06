let counterValuem = 0;
const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
const valueEm = document.querySelector("#value");
buttonDecrement.addEventListener("click", buttonDecrementClickHandler);
buttonIncrement.addEventListener("click", buttonIncrementClickHandler);

function buttonIncrementClickHandler() {
  counterValuem += 1;
  valueEm.textContent = counterValuem;
}

function buttonDecrementClickHandler() {
  counterValuem -= 1;
  valueEm.textContent = counterValuem;
}
