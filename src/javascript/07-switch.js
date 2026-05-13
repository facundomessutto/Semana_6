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
var dia = "lunes";
//la exclamacion indica que es distinto de false (true)
if(!false){
    dia = "domingo"
}
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

console.log("-------------------------------------");

//Definimos una variable
var edad = 13;

//Definimos las variables con condiciones
var esNino = edad < 13;
var esAdolescente = edad >= 13 && edad < 18;
var esAdulto = edad >= 18 && edad < 65;
var esAdultoMayor = edad >= 65;

//Preguntamos que tipo de valor estaremos trabajando
console.log(typeof (esNino));

//Realizamos el switch con valor != a numerico
switch (true) {
    case esNino:
        parametros = "Eres un niño";
        break;
    case esAdolescente:
        parametros = "Eres adolescente";
        break;
    case esAdulto:
        parametros = "Eres adulto";
        break;
    case esAdultoMayor:
        parametros = "Eres adulto mayor";
        break;
    default:
        parametros = "Edad no válida";
        break;
}

console.log(parametros);


console.log("-------------------------------------");














