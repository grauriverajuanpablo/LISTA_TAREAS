
let tasks = [];
let taskIdCounter = 1;
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(task.id));
        li.appendChild(checkbox);
        // Texto de la tarea
        const span = document.createElement('span');
        span.textContent = `ID ${task.id}: ${task.description}`;
        if (task.completed) {
            span.classList.add('completed');
        }
        li.appendChild(span);
        // Botón de eliminación
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });

    const totalTasks = document.getElementById('totalTasks');
    const completedTasks = document.getElementById('completedTasks');
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const description = taskInput.value.trim();
    if (description) {
        const id = taskIdCounter;
        tasks.push({ id, description, completed: false });
        taskInput.value = '';
        taskIdCounter++;
        renderTasks();
    }
}


function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}


function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

