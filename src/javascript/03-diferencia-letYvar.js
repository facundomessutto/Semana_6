

//definir variables con var
var nombre ="Facundo";
//var es una variable global
console.log("El nombre es: ", nombre);

//vamos a usar un if
if(true){
    var nombre= "Andrés";
    console.log("El nombre es: ", nombre);
}
//con  var las variables pueden modificarse/cambiarse siempre
console.log("El nombre es: ", nombre);


console.log("-------------------");


//Definimos variables con let
let apellido="Messutto";

console.log("El apellido es: ", apellido);
//usar if para cambiar apellidos
if(true){
    let apellido= "Betancourt";
    console.log("El apellido es: ", apellido);
}
//con  let las variables no pueden modificarse/cambiarse si no se encuentra en metodo
console.log("El apellido es: ", apellido);

console.log("-------------------");








