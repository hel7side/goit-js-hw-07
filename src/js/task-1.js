const categoriesList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");

console.log(`Кількість категорій: ${categoryItems.length}`);

categoryItems.forEach((item) => {
    const title = item.querySelector("h2").textContent; 
    console.log(`Категорія: ${title}`);
  });
  