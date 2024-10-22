const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function displayTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = ''; 

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}

addButton.addEventListener('click', () => {
    const newTask = taskInput.value.trim();

    if (newTask) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = ''; 
    }
});

displayTasks();

localStorage.removeItem('tasks');

