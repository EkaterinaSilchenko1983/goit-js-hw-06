const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

textInput.addEventListener("change", (event) => {
  textInput.value = event.currentTarget.value.trim();
});

textInput.addEventListener("input", (event) => {
  textSpan.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value === "") {
    textSpan.textContent = "Anonymous";
  }
});
