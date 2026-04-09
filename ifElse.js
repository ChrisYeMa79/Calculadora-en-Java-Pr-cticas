let nombre, edad;
nombre = prompt('INGRESE SU NOMBRE: ');
edad =  prompt('INGRESE SU EDAD: ');

edad = parseInt(edad);

        if(edad >= 18){
            document.write('Eres mayor de edad ', nombre);
        }else if (edad < 18){
            document.write('Eres menor de edad ', nombre);
        }else{
            document.write('No ingresaste datos')
        }