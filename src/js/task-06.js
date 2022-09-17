const inputValidEl = document.querySelector("#validation-input");

inputValidEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value = event.currentTarget.value.trim();
  if (event.currentTarget.value.length === 6) {
    inputValidEl.classList.add("valid");
    if (inputValidEl.classList.contains("invalid")) {
      inputValidEl.classList.remove("invalid");
    }
  } else {
    inputValidEl.classList.add("invalid");
    if (inputValidEl.classList.contains("valid")) {
      inputValidEl.classList.remove("valid");
    }
  }
}
