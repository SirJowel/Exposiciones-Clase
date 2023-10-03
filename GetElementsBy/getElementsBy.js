// Obtener elementos del DOM

// Obtener elemento por su ID
const miDiv = document.getElementById('miDiv');
console.log('Elemento por ID:', miDiv);

// Obtener elementos por su clase
const parrafos = document.getElementsByClassName('parrafo');
console.log('Elementos por clase (parrafo):', parrafos);

// Obtener elementos por su etiqueta
const listItems = document.getElementsByTagName('li');
console.log('Elementos por etiqueta (li):', listItems);

// Obtener elemento por selectores CSS utilizando querySelector
const otroDiv = document.querySelector('.otroDiv');
console.log('Elemento por selector (otroDiv):', otroDiv);

// Obtener múltiples elementos por selectores CSS utilizando querySelectorAll
const parrafosEnDivs = document.querySelectorAll('div p');
console.log('Elementos por selector (div p):', parrafosEnDivs);