/*let valor;

do {
    valor = parseInt(prompt('INGRESE VALOR 1 PARA SALIR'));
    document.write('ingreso valor: ', valor);
    document.write('<br>');
} while (valor != 1);
document.write('FIN DEL BUCLE');*/

let usuario, clave, control;

control = 0;
usuario = prompt('INGRESE USUARIO');
clave =  prompt('INGRESE SU CONTRASEÑA');

do {
    if(clave != 'MIacceso33%'){
        clave = prompt('CONTRASEÑA INCORRECTA\n'+
                   'INTENTE DE NUEVO ...' );
                   control = 0;
    }else{
        control = 1;
    }
    
} while (control != 1);
document.write('ACCESO CORRECTO!!');