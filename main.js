<li class="items"></li>

function addItem(event) {
  event.preventDefault();
  const item = document.createElement("li");
  item.classList.add("items");
  item.innerHTML = `<h2>${event.target.first_name.value}</h2>`;
  document.querySelector(".items").appendChild(item);
}