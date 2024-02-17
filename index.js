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

const getParentList = () => document.getElementById('taskList');

function renderTask() {
   const taskList = getParentList();
    const newItem = tasks.pop();
    const newTaskToRender = document.createElement('div')
    newTaskToRender.innerHTML = `
    <div class="task-container" id=${newItem}>
        <label for="task${newItem}">
        <input type="checkbox">
        ${newItem}
        </label>
        <button class="button-delete" onclick="removeTask(${newItem})" type="submit" >Delete</button>
    </div>
    `

    taskList.appendChild(newTaskToRender);
}

function removeTask(taskToDelete) {
    const filteredTasks = tasks.filter((task) => task !== taskToDelete );
    const taskList = getParentList();
    taskList.innerHTML = ``;
    filteredTasks.forEach((task) => {
        taskList.appendChild(`
        <div class="task-container" id=${newItem}>
            <label for="task${newItem}">
            <input type="checkbox">
            ${newItem}
            </label>
            <button class="button-delete" onclick="removeTask(${newItem})" type="submit" >Delete</button>
        </div>
        `)
    });
}

