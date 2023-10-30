const categories = document.querySelector("#categories");

const categoriesCount = categories.querySelectorAll(".item").length;

categories.querySelectorAll(".item").forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;

  console.log(`
    Category: ${title}
    Elements: ${elementsCount}
  `);
});

console.log(`Number of categories: ${categoriesCount}`);
