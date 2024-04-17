/** @format */

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage on page load
document.addEventListener("DOMContentLoaded", function () {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach(function (taskText) {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
  });
});
