// Obtén referencias a los elementos del DOM
const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const container= document.querySelector("#container");

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // Crea un nuevo elemento <li>
        
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");

        // Añade un botón para eliminar la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("btn","btn-danger");
        
        // Asigna un evento de clic para eliminar la tarea
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });

        // Agrega el botón de eliminación al elemento <li>
        taskItem.append(deleteButton);

        // Agrega el elemento <li> a la lista de tareas
        taskList.append(taskItem);

        // Borra el contenido del campo de entrada
        taskInput.value = "";
    }
}


// Asigna un evento de clic al botón "Agregar"
addTaskButton.addEventListener("click", addTask);

