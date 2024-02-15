userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
});

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskItem = document.createElement('div');
      taskItem.innerHTML =  `
      <div class="task-container">
          <label for="task${index}">
          <input type="checkbox">
          ${task}
          </label>
          <button class="button-delete" onclick="removeTask(${index})" type="submit" >Delete</button>
      </div>
      `
      taskList.appendChild(taskItem);
    });
  }

   function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
  }

  