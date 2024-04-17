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
