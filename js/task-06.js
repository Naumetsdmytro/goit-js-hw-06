const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const input = event.target;
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
}
