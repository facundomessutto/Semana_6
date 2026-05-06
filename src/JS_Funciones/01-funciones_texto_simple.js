
//Definimos una variable
let nombre = "Facundo";
let asignatura = "Desarrollo de Software";
//Creamos la primera funcion
function saludar(){
    console.log("Hola Estudiante "+ nombre + "!");
    console.log("Estamos en "+ asignatura + "!");
}
//llamamos a la funcion a ejecutar
saludar();

function Asignatura(){
    console.log("Estamos en la clase "+ asignatura + "!");
}
Asignatura();

console.log("--------------------------------------------");

//Declaración tradicional
function saludar2(apellido, b){
    console.log("Hola "+apellido+"! "+b);
}
let ejemploA="Betancourt";
//llamamos a la funcion
saludar2(ejemploA, "lala pipo");

console.log("--------------------------------------------");

//Funcion sin parametro
function mostrarFechaActual() {
    //Ojo Estamos usando una constante, es decir no cambia, pero,... la hora cambia a cada segundo
    const ahora = new Date();
    console.log("Hoy es: " + ahora.toLocaleDateString());
}

// Cada vez que la llames, hará exactamente lo mismo
mostrarFechaActual();


console.log("----------------------------------------");


//Funcion con if, Omitimos la creacion de variables, ya que las parseamos abajo
function verificarAcceso(nombre, edad) {
    if (edad >= 18) {
        console.log("Bienvenido " + nombre + ". Tienes acceso concedido.");
    } else {
        console.log("Lo siento " + nombre + ", eres menor de edad.");
    }
}

verificarAcceso("Ezla Patito", 25);
verificarAcceso("Elviz Tek", 16);

//Tarea, crear la misma funcion de arriba pero definiendo las variables
console.log("¸¸¸¸¸¸¸¸¸¸");

let edad3 = 15;
let nombre3 = "Juan pepinilloricksanchez";
function veri(){
    if (edad3 >= 18) {
        console.log("Bienvenido " + nombre3 + ". Tienes acceso concedido.");
    } else {
        console.log("Lo siento " + nombre3 + ", eres menor de edad.");
    }
}
veri();

//----------------------------------------

//Definimos la variable con un monto
function calcularImpuesto(monto) {
    // Esta variable solo existe aquí dentro, visto en clase pasada
    let tasa = 0.19;
    let total = monto * tasa;
    return total;
}

// Resultado que esperamos 190
console.log("Resultado: ", calcularImpuesto(1000));































