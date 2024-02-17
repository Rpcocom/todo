userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
});

//@TODO: implement an object with id and value

const tasks = [];

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
    const newItem = [...tasks].pop();
    const newTaskToRender = document.createElement('div')
    newTaskToRender.innerHTML = `
    <div class="task-container" id=${newItem}>
        <label for="task${newItem}">
        <input type="checkbox">
        ${newItem}
        </label>
        <button class="button-delete" onclick="removeTask(${tasks.length - 1})" type="submit" >Delete</button>
    </div>
    `

    taskList.appendChild(newTaskToRender);
}

function removeTask(taskToDelete) {
    console.log(taskToDelete)
    if(tasks.length > 1){
        tasks.splice(taskToDelete, 1);
    }else {
        tasks.pop();
    }
    
    const taskList = getParentList();
    taskList.innerHTML = ``;
    tasks.forEach((task) => {
        const newItemTasks = document.createElement('div');
        newItemTasks.innerHTML = `
        <div class="task-container" id=${task}>
            <label for="task${task}">
            <input type="checkbox">
            ${task}
            </label>
            <button class="button-delete" onclick="removeTask(${task})" type="submit" >Delete</button>
        </div>
        `
        taskList.appendChild(newItemTasks)
    });
}

