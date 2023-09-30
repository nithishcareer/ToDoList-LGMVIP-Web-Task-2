// script.js

document.addEventListener("DOMContentLoaded", function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    document.getElementById("addTaskBtn").addEventListener("click", function () {
        addTask();
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    taskList.addEventListener("click", function (event) {
        var target = event.target;

        if (target.classList.contains("done-btn")) {
            markAsDone(target);
        } else if (target.classList.contains("delete-btn")) {
            deleteTask(target);
        }
    });

    function addTask() {
        if (taskInput.value.trim() !== "") {
            var li = document.createElement("li");
            li.innerHTML = `
                <span>${taskInput.value}</span>
                <button class="done-btn">Done</button>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    function markAsDone(button) {
        var taskItem = button.parentNode;
        taskItem.classList.toggle("done");
    }

    function deleteTask(button) {
        var taskItem = button.parentNode;
        taskList.removeChild(taskItem);
    }
});
