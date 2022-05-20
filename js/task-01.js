const categoryItemEl = document.querySelectorAll("[id='categories'] > .item");

console.log("Number of categories: ", categoryItemEl.length);

categoryItemEl.forEach((item) => {
  const headItemEl = item.querySelector("h2");
  const listItemEl = item.querySelectorAll("ul > li");
  console.log("Category: ", headItemEl.textContent);
  console.log("Elements: ", listItemEl.length);
});
