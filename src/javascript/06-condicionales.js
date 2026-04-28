

//Definir las variables
let edad =18;
let limiteedad =18;

//if
if(edad >=limiteedad){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

console.log("----------------------------------------");

//if anidado
if(edad >=limiteedad){
    console.log("Es mayor de edad");

if(edad==20){
    console.log("Aun no te van a doler las rodillas (El usuario tiene 20 años)");
    }else if(edad >=23){
        console.log("Ya te duelen las rodillas (tienes mas de 20 años)");
    }

}else{
    console.log("Es menor de edad");
}

console.log("----------------------------------------");

//Creamos otro if, usando el "Y" (&&)
if(edad >= limiteedad && (edad <= (limiteedad + 82))){
    
    console.log("Mayor de edad y menor de 100");
    //Agregamos al operador && (Y) y el Distinto !=
}else if (edad <= limiteedad && edad != 2){
    console.log("Esta persona es menor de edad y no tiene dos añitos");
}else{
    console.log("Es un puberto");
}

console.log("----------------------------------------");


//If con condicional "O"
if((edad == 1)||(edad < limiteedad)){
    console.log("No puede comprar alcohol");
}else{
    console.log("Si puede comprar alcohol");
}





