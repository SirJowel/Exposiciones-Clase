// Obtén una referencia al elemento div por su ID
const miDiv = document.getElementById("miDiv");

// Obtener referencia al botón
const botonCambiarContenido = document.getElementById("cambiarContenido");

// Función para cambiar el contenido y la estructura del div
function cambiarContenido() {
  miDiv.outerHTML = `
        <div id="miDiv">
            <h2>Nuevo Título</h2>
            <p>Este es un nuevo párrafo.</p>
            <p>Este es otro párrafo nuevo.</p>
        </div>
    `;
}

// Asignar evento al botón
botonCambiarContenido.addEventListener("click", cambiarContenido);
