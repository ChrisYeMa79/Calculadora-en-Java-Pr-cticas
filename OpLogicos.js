//OPERADOR && (y)
/*let continente, edad;
continente = prompt('INGRESE SU CONTIENTE');
edad = prompt('INGRESE SU EDAD');
edad = parseInt(edad);

if (continente == 'America' && edad >= 18) {
    document.write('eres un adulto americano');
}else{
    document.write('o no eres adulto, o no eres americano')
}*/

let dia, mes, anio;
dia = parseInt(prompt('INGRESE NUMERO DE DIA'));
mes = parseInt(prompt('INGRESE UN NUMERO DE MES'));
anio = parseInt(prompt('INGRESE AÑO'));

if (mes == 1 || mes == 2 || mes == 3) {
    document.write('Pertenece al primer trimestre');
}else{
    document.write('No pertenece al primer trimestre');
}