/** @format */

function saveTask() {
  const nameElement = document.getElementById("text");

  let listItems = {
    name: nameElement.value,
  };

  if (localStorage.listItems === undefined) {
    localStorage.listItems = JSON.stringify([]);
  }
  let listItemsArray = JSON.parse(localStorage.listItems);
  listItemsArray.push(listItems);
  localStorage.listItems = JSON.stringify(listItemsArray);

  displayListItems();
}

function displayListItems() {
  if (localStorage.listItems !== undefined) {
    let listItemsArray = JSON.parse(localStorage.listItems);
    listItemsArray.sort(function (a, b) {
      return b.items - a.items;
    });

    const listItemsElement = document.getElementById("listItems");
    listItems.innerText = "";
    for (let items of listItemsArray) {
      const item = document.createElement("li");
      item.innerText = items.name;
      listItemsElement.appendChild(item);

      const
    }
  }
}
