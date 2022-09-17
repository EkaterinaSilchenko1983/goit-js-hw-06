const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngridients = document.querySelector("#ingredients");
console.log(listIngridients);
ingredients.forEach((ingredient) => {
  const itemIngridient = document.createElement("li");
  console.log(itemIngridient);
  itemIngridient.textContent = ingredient;
  itemIngridient.classList.add("item");
  listIngridients.append(itemIngridient);
});
