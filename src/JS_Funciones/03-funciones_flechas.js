



// Si solo tiene una línea, el 'return' es implícito
const multiplicar = (a, b) => a * b;
//Imprimimos el resultado y hardcoreamos valores
console.log("Multiplicación: " + multiplicar(4, 5));

console.log("---------------------------");


// Ejemplo de como convertir Celsius a Fahrenheit
const celsiusAFahrenheit = c => (c * 9/5) + 32;
console.log("Fahrenheit: " + celsiusAFahrenheit(30)); // 86




console.log("---------------------------");
const obtenerVersion = () => "v1.0.4";
console.log("Sistema versión: " + obtenerVersion());




console.log("---------------------------");
//Creacion de un objeto dentro de un arrow function
const crearUsuario = (id, nombre) => ({ id: id, nombre: nombre });
const user1 = crearUsuario(1, "Daniel");
console.log(user1);





const user2 = crearUsuario(2, "Ana");
const user3 = crearUsuario(3, "Pedro");
// Los guardamos en una lista para manejarlos mejor
const listaUsuarios = [user1, user2, user3];
console.log(listaUsuarios);



console.log("---------------------------");

//Creamos el Array de precios
const precios = [100, 200, 300, 400];
// Aplicar un descuento del 10% a todos los precios en una arrowfunction, (MAp Es para recorrer un array)
const preciosConDescuento = precios.map(p => p * 0.9);

// [90, 180, 270, 360]
console.log(preciosConDescuento);



console.log("---------------------------");

const superHeroes = ["Omniman", "Invensible", "AtomEve", "The Inmortal"];

// .map recorre el array y por cada nombre crea un objeto
// El segundo parámetro de map (i) es el índice (0, 1, 2...)
const superHeroesProcesados = superHeroes.map((nom, i) => ({ 
    id: i + 1, 
    nombre: nom 
}));

console.table(superHeroesProcesados);