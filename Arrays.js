let numeros =[];
numeros = [15,80,650,30.3,-10];
document.write('Elementos; ', numeros);
document.write('<br>');
document.write('Primer Elemento: ', numeros[0]);
document.write('<br>');
numeros[0] = 14; //Sustituye el elemento seleccionado por otro, el cero es el primer elemento
document.write('Elementos; ', numeros);
document.write('<br>-----------');


let frutas = ['manzanas', 'peras', 'naranjas', 'mangos'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>');

//METODOS DE LOS ARRAYS (ARREGLOS)

//VER CANTIDAD DE ELEMENTOS
document.write('Cantidad de elementos en lista de números: ', numeros.length);
document.write('<br>');
document.write('Cantidad de elementos en lista de frutas: ', frutas.length);
document.write('<br>');

//PARA SABER CUAL ES EL ULTIMO ELEMENTO DE UNA LISTA
document.write('Último de los elementos en lista de números: ', numeros[numeros.length-1]);
document.write('<br>');
document.write('Último de los elementos en lista de frutas: ', frutas[frutas.length-1]);
document.write('<br>');

//ARRAYS EN TIPO TEXTO
document.write('En String: ', numeros.toString()); //Esta función transforma en texto los números
document.write('<br>');

//UNIR TIPOS DE ARRAYS
let letras = ['a','b','c'];
let numeros2 = [1,2,3];
document.write('Alfanumérico: ', letras.concat(numeros2));
document.write('<br>');

//BORRAR EL ULTIMO ELEMENTO DE UN ARRAY
numeros.pop()
document.write(numeros);
document.write('<br>');

//AGREGAR UN ULTIMO ELEMENTO EN UN ARRAY
numeros.push(-10)
document.write(numeros);
document.write('<br>');

//BORRAR EL PRIMER ELEMENTO DE UN ARRAY
numeros.shift()
document.write(numeros);
document.write('<br>');

//AGREGAR UN PRIMER ELEMENTO EN UN ARRAY
numeros.unshift(140);
document.write(numeros);
document.write('<br>');

//ELIMNAR ELEMENTOS A PARTIR DE UN PUNTO
numeros.splice(2,3); //esto significa que apartir de la posición 2 (partiendo desde cero), elimina 3 números 
document.write(numeros);
document.write('<br>');

//COMO COPIAR CON UN ARRAY
let cantidades = [100,200,500,600,800];
let copia = cantidades.slice(1,4); //El javascript anula la posición cero y la posición 4 menos uno (-1), es decir en la lista quedan fuera el 100 y el 800
document.write('Array copia: ', copia);
document.write('<br>');

//ORGANIZAR ARRAYS EN MODO ALFABETICO
let objetos = ['carro', 'botella', 'planeta', 'zorro']
document.write(objetos.sort());
document.write('<br>');

//ORGANIZA ARRAYS AL REVES 
document.write(objetos.reverse());
document.write('<br>');






