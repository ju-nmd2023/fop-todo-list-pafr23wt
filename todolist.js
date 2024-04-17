/** @format */

function saveTasks() {
  const nameElement = document.getElementById("name");
  let tasks = { name: nameElement.value };

  if (localStorage.tasks === undefined) {
    localStorage.tasks = JSON.stringify([]);
  }

  let tasksArray = JSON.parse(localStorage.tasks);
  tasksArray.push(tasks);
  localStorage.tasks = JSON.stringify(tasksArray);

  displayTasks();
}

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
  saveTasks();
});

function displayTasks() {
  const tasksElement = document.getElementById("tasks");
  tasksElement.innerHTML = "";

  if (localStorage.tasks !== undefined) {
    let tasksArray = JSON.parse(localStorage.tasks);

    for (let task of tasksArray) {
      const item = document.createElement("li");
      item.innerText = task.name;

      //inspo by ChatGPT
      // Create checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          item.classList.add("completed");
        } else {
          item.classList.remove("completed");
        }
      });
      item.appendChild(checkbox);