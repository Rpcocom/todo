userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
});

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (!taskText) return;
    tasks.push(taskText);
    renderTask();
    taskInput.value = '';

}

function renderTask() {
    const taskList = document.getElementById('taskList');
    const newItem = tasks.pop();
    const newTaskToRender = document.createElement('div')
    newTaskToRender.innerHTML = `
    <div class="task-container">
        <label for="task${newItem}">
        <input type="checkbox">
        ${newItem}
        </label>
        <button class="button-delete" onclick="removeTask(${newItem})" type="submit" >Delete</button>
    </div>
    `

    taskList.appendChild(newTaskToRender);
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTask();
}

