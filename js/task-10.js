const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input[type='number']");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(event) {
  for (let i = 0; i < inputEl.value; i += 1) {
    let randomColor = getRandomHexColor();
    const randomDiv = document.createElement("div");
  }
}

function destroyBoxes() {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
