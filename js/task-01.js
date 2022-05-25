const categoryItemEl = document.querySelectorAll("[id='categories'] > .item");

console.log("Number of categories: ", categoryItemEl.length);

categoryItemEl.forEach((item) => {
  // const headItemEl = item.querySelector("h2");
  const headItemEl = item.firstElementChild;
  // const listItemEl = item.querySelectorAll("ul > li");
  const listItemEl = item.lastElementChild.children;
  console.log("Category: ", headItemEl.textContent);
  console.log("Elements: ", listItemEl.length);
});
