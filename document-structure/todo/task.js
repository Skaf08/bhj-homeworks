let input = document.getElementById("task__input");
let taskList = document.getElementById("tasks__list");
window.addEventListener("keyup", addTask);
function addTask(event) {
  if(event.keyCode == 13) {
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
}






