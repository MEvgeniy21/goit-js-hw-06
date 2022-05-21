const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  const formRefs = event.currentTarget;
  const elements = formRefs.elements;
  const alertMessage = "Нужно заполнить все поля формы!";
  const formData = {};

  event.preventDefault();

  if (!elements.email.value.length || !elements.password.value.length) {
    alert(alertMessage);
  } else {
    formData[elements[0].name] = elements[0].value;
    formData[elements[1].name] = elements[1].value;
    console.log(formData);
    formRefs.reset();
  }
}
