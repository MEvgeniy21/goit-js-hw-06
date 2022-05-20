const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientListEl = document.querySelector("[id='ingredients']");

const ingredientItemEl = ingredients.reduce((acc, item) => {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  acc.push(element);
  return acc;
}, []);

ingredientListEl.append(...ingredientItemEl);
