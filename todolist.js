/** @format */

const headlineElement = document.querySelector("h1");
console.log(headlineElement);

const tasks = ["buy milk", "clean", "wash"];
const taskListElement = document.getElementById("taskList");

for (let task of tasks) {
  const taskElement = document.createElement("div");
  taskElement.innerText = task;
  taskListElement.appendChild(taskElement);
}
