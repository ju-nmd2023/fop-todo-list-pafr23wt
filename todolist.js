/** @format */

document.addEventListener("DOMContentLoaded", function () {
  displayTasks();
});

//inspo from garrit´s video flip-coin-game
function saveTasks() {
  const nameElement = document.getElementById("name");
  const taskName = nameElement.value.trim();

  // Check if name field is empty
  if (taskName === "") {
    // If name field is empty, do nothing
    return;
  }

  let tasks = { name: taskName, completed: false }; // Add completed property

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

function updateLocalStorage(tasksArray) {
  localStorage.tasks = JSON.stringify(tasksArray); // Update localStorage with the modified tasksArray
}

function displayTasks() {
  const tasksElement = document.getElementById("tasks");
  tasksElement.innerHTML = "";

  if (localStorage.tasks !== undefined) {
    let tasksArray = JSON.parse(localStorage.tasks);

    for (let task of tasksArray) {
      const item = document.createElement("li");
      item.innerText = task.name;
      if (task.completed) {
        // Check if task is completed
        tasksElement.appendChild(item);
      }
      //inspo from garrit´s video flip-coin-game

      //inspo by ChatGPT https://chat.openai.com/share/1ed78b6c-7a1e-4877-be9f-b1bbd5ca4b27
      // Create checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed; // Set checkbox state
      checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked; // Update the completed property
        updateLocalStorage(tasksArray); // Update local storage
        if (checkbox.checked) {
          item.classList.add("completed");
        } else {
          item.classList.remove("completed");
        }
      });
      item.appendChild(checkbox);

      // Create remove button
      const removeButton = document.createElement("button");
      removeButton.textContent = "✖";
      removeButton.classList.add("remove-button"); // Add a class

      removeButton.addEventListener("click", function () {
        // Find the index of the task in the array
        const index = tasksArray.findIndex((t) => t.name === task.name);
        if (index !== -1) {
          tasksArray.splice(index, 1); // Remove the task from the array
          updateLocalStorage(tasksArray); // Update localStorage
          displayTasks(); // Update the display
        }
      });
      item.appendChild(removeButton);

      tasksElement.appendChild(item);
      //inspo by ChatGPT https://chat.openai.com/share/1ed78b6c-7a1e-4877-be9f-b1bbd5ca4b27
    }
  }
}
