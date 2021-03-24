
function addTask(textTask){

    if(textTask!=""){
        var taskList = document.getElementById('TaskList');

    //Crear el contenedor
    var newTask = document.createElement('div');
    newTask.className = 'task';

    //Crear el checkbox
    var checkTask = document.createElement('input');
    checkTask.className = 'checkTask';
    checkTask.type = 'checkbox';

    //Crear la tarea
    var nameTask = document.createElement('h5');
    nameTask.className = 'task-title';
    nameTask.textContent = textTask;

    //Añadir la tarea y el checkbox al contenedor
    newTask.appendChild(checkTask);
    newTask.appendChild(nameTask);

    //Añadir la tarea al contendor de tareas
    taskList.appendChild(newTask);

    //Borrar valor del textbox
    document.getElementById('NewTask').value = "";
    }
    else{
        alert("Por favor, rellena la tarea antes de añadirla");
    }

}

