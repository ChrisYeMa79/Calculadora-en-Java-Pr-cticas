//redondear al siguiente entero en decimal 0.5
var precio = Math.round(399.53);
document.write("precio redondeado: ", precio);
document.write("<br>");

//redondear sin importar decimal hacia el nùmero superior
var precio = Math.ceil(299.4);
document.write("precio redondeado: ", precio);
document.write("<br>");

//redondear sin importar decimal hacia el nùmero inferior
var precio = Math.floor(540.9);
document.write("precio redondeado: ", precio);
document.write("<br>");

//funciones, seno, coseno, tangente el javascrip las calcula en radianes (por tanto hay que buscar la conversiòn a grados)
//para convertir grados a radianes, se multiplican los grados * pi/180  ... para radianes a grados, se multiplican los radianes por 180/pi
var seno = Math.sin(.78539);
document.write("seno de 45: ", seno);
document.write("<br>");

var coseno = Math.cos(.78539);
document.write("coseno de 45: ", coseno);
document.write("<br>");

var tangente = Math.tan(.78539);
document.write("tangente de 45: ", tangente);
document.write("<br>");

//calcular el exponencial de un numero
var expo = Math.exp(2);
document.write("exponencial de 2: ", expo);
document.write("<br>");

//valor absoluto de un nùmero
var absoluto = Math.abs(-10);
document.write("valor absoluto de -10: ", absoluto);
document.write("<br>");

//calcular el valor màximo de secuencia
var màximo = Math.max(10,50,600,1,8);
document.write("mayor valor de la lista es : ", màximo);
document.write("<br>");

//calcular el valor mìnimo de secuencia
var mìnimo = Math.min(10,50,600,1,8);
document.write("menor valor de la lista es : ", mìnimo);
document.write("<br>");

//traer en pantalla un valor aleatorio
var aleatorio = Math.random()*10;
document.write("el valor aleatorio es : ", aleatorio);
document.write("<br>");

//raiz cuadrada de un numero
var valor = Math.sqrt(81);
document.write("raiz cuadrada de 81 es : ", valor);
document.write("<br>");

//calcular el exponente de un numero
var exponente = Math.pow(4,2);
document.write("4 al cuadrado es : ", exponente);
document.write("<br>");
