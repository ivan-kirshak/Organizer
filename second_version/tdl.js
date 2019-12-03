function doneTask(e) {
    e.target.style.fontStyle = "italic";
    e.target.style.backgroundColor = "yellow";
}

function deleteTask(e) {
    if (confirm("Have you completed the task?")) {
        e.target.parentElement.remove();
    }
}

function addTask(e) {
    let task = document.getElementById("task");
    let sDay = document.getElementById("datedaystart");
    let sTime = document.getElementById("time-start");
    let fDay = document.getElementById("datedayend");
    let fTime = document.getElementById("time-end");

    //creates a new task if form is filled
    if (task.value != "" && sDay.value != "" && sTime.value != "" && fDay.value != "" && fTime.value != "") {
        let startDay = new Date(sDay.value).toLocaleDateString();
        let finishDay = new Date(fDay.value).toLocaleDateString();

        let d = new Date();
        let day = d.toLocaleDateString('en-GB');
        let time = d.toLocaleTimeString();

        let newTask = document.createElement("li"); //creates new element <li></li> (task)
        newTask.innerHTML = `${task.value} (from ${sTime.value}, ${startDay} to 
        ${fTime.value}, ${finishDay}) 
        <span class="time">(added at ${day}, ${time})</span>`; //inserts printed text into li element
        newTask.addEventListener("click", doneTask, false); //when task is clicked, doneTask function executes

        let deleteBtn = document.createElement("span"); // created "delete button"
        deleteBtn.innerHTML = `&times;`; // "X" symbol for "delete button"
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", deleteTask, false); // onclick deleteTask function executes
        newTask.appendChild(deleteBtn); // "X" button is now in the list item

        let tasks = document.getElementById("tasks");
        tasks.appendChild(newTask); //adds new task, when it's printed
    } else {
        alert("Please, fill the empty blanks");
    }
}

let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", addTask, false);

// clock in footer 
function clockCalendar() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let day = d.toDateString();
    let today = document.getElementById("today");

    hour = (hour < 10) ? hour = `0${hour}` : hour;
    minute = (minute < 10) ? minute = `0${minute}` : minute;
    second = (second < 10) ? second = `0${second}` : second;

    today.innerText = `Right now is ${hour}:${minute}:${second}; ${day}`;
}

setInterval(clockCalendar, 1000);