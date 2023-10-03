// Acceder y modificar el contenido del DOM

// Obtener referencias a elementos del DOM
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const lista = document.getElementById("lista");
const contenedor = document.querySelector("#container");

// Modificar el contenido de un elemento
titulo.textContent = "Nuevo Título";

// Agregar contenido HTML a un elemento
parrafo.innerHTML = "Este párrafo <strong>ha sido modificado</strong>.";

// Agregar un nuevo elemento a la lista
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 4";
lista.appendChild(nuevoElemento);
const comentario = document.createComment("Esto es un comentario desde js");
contenedor.appendChild(comentario);
