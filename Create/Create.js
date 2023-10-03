// Crear un nuevo elemento div
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Este es un nuevo div creado con createElement';

// Crear un comentario
const comentario = document.createComment('Este es un comentario');

// Crear un nodo de texto
const texto = document.createTextNode('Este es un nodo de texto');

// Clonar el div
const clonDiv = nuevoDiv.cloneNode(false);//true es para copiarlo con todo y elementos , false solo clona el div solo

// Verificar si el div clonado está conectado al DOM
let estaConectado = clonDiv.isConnected;

// Obtener una referencia al contenedor en el DOM
const contenedor = document.getElementById('contenedor');

// Agregar los elementos al contenedor
contenedor.appendChild(nuevoDiv); // Agregar el nuevo div
contenedor.appendChild(comentario); // Agregar el comentario
contenedor.appendChild(texto); // Agregar el nodo de texto
//o append(nuevoDiv,comentario,texto)
// Verificar si el div clonado está conectado y agregarlo al contenedor si lo está
if (estaConectado) {
    console.log("Esta conectado");
}
else{
    contenedor.appendChild(clonDiv);
}
estaConectado = clonDiv.isConnected;

// Mostrar el estado de isConnected en la consola
console.log('¿El div clonado está conectado al DOM?', estaConectado);
