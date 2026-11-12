const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#list');
const counter = document.querySelector('#counter');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function render() {
    list.innerHTML = '';
    tasks.forEach((task, index) => {

        const li = document.createElement('li');
        li.textContent = task.text + " ";
        if (task.done) {
            li.classList.add('done');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            save();
            render();
        });
        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.done ? "Undo" : "Done";
        toggleButton.classList.add('toggle-button');
        toggleButton.addEventListener("click", () => {
            task.done = !task.done;
            save();
            render();
        });
        li.appendChild(deleteButton);
        li.appendChild(toggleButton);
        list.appendChild(li);
    });

    const doneCount = tasks.filter(task => task.done).length;

    if (tasks.length === 0) {
        counter.textContent = "No tasks yet. Add one!";
    } else {
        counter.textContent = doneCount + " of " + tasks.length + " tasks done";
    }
}

addButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task === "") {
        return;
    }
    tasks.push({ text: task, done: false });
    taskInput.value = '';
    save();
    render();
});
render();
