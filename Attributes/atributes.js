// Obtener una referencia al elemento div en el DOM
const miDiv = document.getElementById('miDiv');

//Obtener referencias a los botones
const setAttrBtn = document.getElementById('setAttrBtn');
const toggleAttrBtn = document.getElementById('toggleAttrBtn');
const removeAttrBtn = document.getElementById('removeAttrBtn');

// Verificar si el elemento tiene atributos
const tieneAtributos = miDiv.hasAttributes();

// Verificar si el elemento tiene un atributo específico
const tieneClase = miDiv.hasAttribute('class');
const tieneDataInfo = miDiv.hasAttribute('data-info');

// Obtener los nombres de todos los atributos del elemento
const nombresAtributos = miDiv.getAttributeNames();

// Obtener el valor de un atributo específico
const valorClase = miDiv.getAttribute('class');
const valorDataInfo = miDiv.getAttribute('data-info');

// Función para establecer un nuevo atributo personalizado
function setCustomAttribute() {
    miDiv.setAttribute('custom-attr', '98765');
}

// Función para alternar la presencia de un atributo
function toggleClassAttribute() {
    miDiv.toggleAttribute('class');
}

// Función para eliminar un atributo específico
function removeDataInfoAttribute() {
    miDiv.removeAttribute('data-info');
}

// Asignar eventos a los botones
setAttrBtn.addEventListener('click', setCustomAttribute);
toggleAttrBtn.addEventListener('click', toggleClassAttribute);
removeAttrBtn.addEventListener('click', removeDataInfoAttribute);
// Mostrar los resultados en la consola
console.log('¿El elemento tiene atributos?', tieneAtributos);
console.log('¿El elemento tiene el atributo "class"?', tieneClase);
console.log('¿El elemento tiene el atributo "data-info"?', tieneDataInfo);
console.log('Nombres de atributos del elemento:', nombresAtributos);
console.log('Valor del atributo "class":', valorClase);
console.log('Valor del atributo "data-info":', valorDataInfo);
