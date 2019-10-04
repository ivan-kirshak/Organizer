function doneTask(e) {
    e.target.style.fontStyle = "italic";
    e.target.style.backgroundColor = "yellow";
}

function deleteTask(e) {
    if (confirm("Have you completed the task?")){
    e.target.parentElement.remove();
    }
}

function addTask(e) {
    let task  = document.getElementById("task");

    let d = new Date();
    let time = d.toUTCString();

    let newTask = document.createElement("li"); //creates new element <li></li> (task)
    newTask.innerHTML = `${task.value} <span class="time">(added at ${time})</span>`; //inserts printed text into li element
    newTask.addEventListener("click", doneTask, false); //when task is clicked, doneTask function executes

    let deleteBtn = document.createElement("span"); // created "delete button"
    deleteBtn.innerHTML = `&times;`; // "X" symbol for "delete button"
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", deleteTask, false); // onclick deleteTask function executes
    newTask.appendChild(deleteBtn); // "X" button is now in the list item

    let tasks = document.getElementById("tasks");
    tasks.appendChild(newTask); //adds new task, when it's printed
}

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", addTask, false);

