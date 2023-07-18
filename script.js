const task = document.getElementById('tackInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');
addTaskButton.addEventListener('click', addTask);

const urlServer = 'https://jsonplaceholder.typicode.com/users/1/todos';

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
                doneButton.id = 'doneButton';
                doneButton.innerHTML = 'Do it!';
                doneButton.style.margin = '5px';
                doneButton.style.backgroundColor = 'red';
                doneButton.style.borderRadius = '5px';
                doneButton.style.cursor = 'pointer';

                
                taskListOl.append(task);
                task.append(doneButton);

                
                            doneButton.addEventListener('click', ()=>taskDone(task));
                            function taskDone(li) {
                                li.style.textDecoration = 'line-through';
                                doneButton.style.backgroundColor = 'green';
                                doneButton.innerHTML = 'Done';
                            }

            });

        })
    })
}


function addTask() {
    const taskName = task.value.trim(); //убирает лишние пробелы в начале и в конце строки
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span>`;
        taskListOl.append(li);


        const doneButton = document.createElement('button');
        doneButton.innerHTML = 'Do it!';
        doneButton.style.margin = '5px'; // почему  не так:  style =' margin: 5px'   ??????????
        doneButton.style.backgroundColor = 'red';
        doneButton.style.borderRadius = '5px';
        doneButton.style.cursor = 'pointer';
        
        li.append(doneButton);
        
       // doneButton.onclick = taskDone;    //то же  рабочий вариант в чем разница???! 
        doneButton.addEventListener('click', taskDone);
        
        function taskDone() {
            li.style.textDecoration = 'line-through';  
            doneButton.style.backgroundColor = 'green';
            doneButton.innerHTML = 'Done';

        }

    }
}
