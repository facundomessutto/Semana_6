//Creamos una variable en este caso sera numerica
let menu = 2;

//Definimos un switch basico, operado por numeros
//Acá se integran las opciones en los cases
//Tarea hagan hasta la opcion 4   
switch(menu){
     case 1: 
        imprime ="Opcion 1";
        break;
     case 2: 
        imprime ="Opcion 2";
        break;
     case 3: 
        imprime ="Opcion 3";
        break;
    default:
        imprime="Opcion no definida";
}
console.log(imprime);
console.log("-------------------------");
//definimos una variable
var dia = "sabado";

//Definimos el Switch con una variable de texto
switch(dia) {
    case "lunes":
        imprime2 = ("Este es el dia: "+ dia);
        break;
    case "martes":
        imprime2 = ("Este es el dia: "+ dia);
        break;
    case "miercoles":
        imprime2 = ("Este es el dia: "+ dia);
        break;
    case "jueves":
        imprime2 = ("Este es el dia: "+ dia);
        break;
    case "viernes":
        imprime2 = ("Este es el dia: "+ dia);
        break;
    case "sabado":
        imprime2 = ("Este es el dia finde: "+ dia);
        break;
    case "domingo":
        imprime2 = ("Este es el dia finde: "+ dia);
        break;
    default:
        imprime2= "Dia no valido";
        break;
}
console.log(imprime2);














