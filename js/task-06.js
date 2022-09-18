const inputValidEl = document.querySelector("#validation-input");

inputValidEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputValidEl.classList.remove("valid");
  inputValidEl.classList.remove("invalid");
  let value = event.currentTarget.value;
  value = value.trim();
  // event.currentTarget.value = event.currentTarget.value.trim();
  if (value.length === 6) {
    inputValidEl.classList.add("valid");
  } else if (value.length !== 6) {
    inputValidEl.classList.add("invalid");
  }
}
