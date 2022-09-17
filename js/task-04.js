let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueCaunter = document.querySelector("#value");

const icrementClick = () => {
  counterValue += 1;
  valueCaunter.textContent = counterValue;
};
incrementBtn.addEventListener("click", icrementClick);

const decrementClick = () => {
  counterValue -= 1;
  valueCaunter.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);
