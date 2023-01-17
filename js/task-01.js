const categoriesList = document.querySelector("#categories");
console.log("Number of categories:", categoriesList.children.length);

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
