// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('todo-list');

        const taskDiv = document.createElement('div');
        taskDiv.className = 'todo';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function () {
            moveTaskToEnd(taskDiv);
        };

        const taskLabel = document.createElement('label');
        taskLabel.className = 'todo-item';
        taskLabel.innerText = taskValue;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskLabel);
        taskList.appendChild(taskDiv);

        taskInput.value = '';
    }
}

// Function to move completed task to the end of the list
function moveTaskToEnd(taskDiv) {
    const taskList = document.getElementById('todo-list');
    taskList.removeChild(taskDiv);
    taskList.appendChild(taskDiv);
}

// Function to restart the page
function restartPage() {
    window.location.reload();
}
