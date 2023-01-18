const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input[type='number']");
const containerEl = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  containerEl.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes() {
  const divs = [];
  for (let i = 0; i < inputEl.value; i++) {
    const color = getRandomHexColor();
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.style.width = `${i * 10 + 30}px`;
    div.style.height = `${i * 10 + 30}px`;
    divs.push(div);
  }
  containerEl.append(...divs);
}
