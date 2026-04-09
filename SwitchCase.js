/*let valor;
valor = parseInt(prompt('Ingrese valor entre 1 y 3'));

switch (valor) {
    case 1:
        document.write('ingresó uno');
        
        break;
    case 2:
        document.write('ingresó dos');
        break;
    case 3:
        document.write('ingresó tres');
        break;

    default:
        document.write('no es número valido');
        break;
}*/

let color
color = prompt('INGRESE UN COLOR: ROJO/VERDE/AZUL');

switch (color) {
    case 'rojo':
        document.write('ingresó rojo');
        break;
    case 'verde':
        document.write('ingresó verde');    
        break;
    case 'azul':
        document.write('ingresó azul');
        break;

    default:
        document.write('no ingreso color');
        break;
}