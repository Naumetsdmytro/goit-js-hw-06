const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (!email.value.trim() || !password.value) {
    alert("Fill in all fields of the form!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.target.reset();

  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => console.log(name, value));
}
