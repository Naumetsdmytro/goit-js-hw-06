const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const value = event.target.value.trim();
  // if (event.currentTarget.value === "") {
  //   nameEl.textContent = "Anonymous";
  //   return;
  // }
  nameEl.textContent = value ? value : "Anonymous";
}
