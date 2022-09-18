inputValidEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValidEl = document.querySelector("#validation-input");
  inputValidEl.classList.remove("valid");
  inputValidEl.classList.remove("invalid");
  event.currentTarget.value = event.currentTarget.value.trim();
  if (event.currentTarget.value.length === 6) {
    inputValidEl.classList.add("valid");
  } else if (event.currentTarget.value.length !== 6) {
    inputValidEl.classList.add("valid");
  }
}
