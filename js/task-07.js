const inputEl = document.querySelector("#font-size-control");
const textSizeEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChangeRange);

function onInputChangeRange(event) {
  textSizeEl.style.fontSize = event.currentTarget.value + "px";
}
