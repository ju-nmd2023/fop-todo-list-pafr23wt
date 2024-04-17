/** @format */

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const removeButton = document.createElement("button");

// Inspo from ChatGPT
document.addEventListener("DOMContentLoaded", function () {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach(function (taskText) {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
  });
});
// Inspo from ChatGPT

// Function to create task element
function createTaskElement(taskText) {
  const taskItem = document.createElement("li");

  // Create task text
  const taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskItem.classList.add("completed");
    } else {
      taskItem.classList.remove("completed");
    }
  });

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "✖";
  removeButton.classList.add("removeButton");
  removeButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
    updateLocalStorage();
  });

  // Append elements to task item
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(checkbox); // Move the checkbox after the task text
  taskItem.appendChild(removeButton);

  return taskItem;
}

// Function to update localStorage with current tasks
function updateLocalStorage() {
  const tasks = [];
  taskList.querySelectorAll("span").forEach(function (taskTextElement) {
    tasks.push(taskTextElement.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input field after adding task
    updateLocalStorage();
  }
});
