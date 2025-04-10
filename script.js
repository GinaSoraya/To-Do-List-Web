const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const taskText  = taskInput.value.trim();
    if (taskText === "") return;

    const task = {text : taskText};
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";

    displayTask();
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask();
}

function editTask(index) {
    const newTaskText = prompt("edit the task: ", tasks[index].text);
    if (newTaskText !== null) {
        tasks[index].text = newTaskText;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTask();
    } 
}

function displayTask() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p>${task.text}</p>
            <button class="edit-button" onclick="editTask(${index})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${index})">Hapus</button>
        `;
        taskList.appendChild(li);
    });
}

displayTask();