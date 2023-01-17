const buttonChangeColor = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const bodyEl = document.body;

buttonChangeColor.addEventListener("click", buttonClickHandler);

function buttonClickHandler(event) {
  const colorHex = getRandomHexColor();
  bodyEl.style.backgroundColor = colorHex;
  textEl.textContent = colorHex;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
