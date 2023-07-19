const task = document.getElementById('tackInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');
const urlServer = 'https://jsonplaceholder.typicode.com/users/1/todos';

function taskDone(li, doneButton) {
    li.classList.toggle('taskDone');
    doneButton.classList.toggle('doneButton');
if (doneButton.innerHTML === "Do it!") {
    doneButton.innerHTML = "Done!"
} else {
    doneButton.innerHTML = "Do it!"
}
}

taskFromURL();

function taskFromURL() {
    let response = fetch(urlServer);
    response.then((response) => {
        data = response.json();
        data.then((res) => {
            res.forEach(element => {
                const task = document.createElement('li');
                
                task.textContent = element.title;
                
                const doneButton = document.createElement('button');
                doneButton.classList.add('doItButton');
               
                doneButton.innerHTML = 'Do it!';
                
                taskListOl.append(task);
                task.append(doneButton);
                if (element.completed === false) {
                    taskDone(task, doneButton)
                }
                
                doneButton.addEventListener('click', () => taskDone(task, doneButton)); //Вынести в отдельную функцию и засунуть в taskDone ?

            });
        })
    })
}


addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskName = task.value.trim(); //убирает лишние пробелы в начале и в конце строки
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span>`;
        taskListOl.append(li);

        const doneButton = document.createElement('button');
        doneButton.classList.add('doItButton');
        doneButton.innerHTML = 'Do it!';

        li.append(doneButton);

        // вот здесь не понятно в чем разница между вызовом функции и ее передачей??? 
        // doneButton.addEventListener('click', taskDone(li, doneButton));   
        doneButton.addEventListener('click', () => taskDone(li, doneButton));


    }
}
