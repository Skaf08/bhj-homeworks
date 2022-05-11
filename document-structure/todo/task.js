let input = document.getElementById("task__input");
let taskList = document.getElementById("tasks__list");
let key = document.getElementById("tasks__add");
key.addEventListener("click", addTask);
function addTask(event) {
  event.preventDefault();
  if(input.value.trim().length == 0) {
    return;
  }
  let task = document.createElement("div");
  let taskTitle = document.createElement("div");
  taskTitle.className = "task__title";
  task.className = "task";
  task.appendChild(taskTitle);
  task.insertAdjacentHTML("beforeEnd", '<a href="#" class="task__remove">&times;</a>');
  taskTitle.innerText = input.value;
  input.value = "";
  taskList.appendChild(task);
  let remove = task.querySelector(".task__remove");
  remove.addEventListener("click", function () {
    task.remove();  
  });
}







