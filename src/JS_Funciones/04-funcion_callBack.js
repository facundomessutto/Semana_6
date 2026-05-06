
// La función principal: Ella tiene el mensaje, pero no sabe qué hacer con él.
function obtenerMensaje(callba) {
    const texto = "¡Clase de JS terminada!";
    callba(texto); // Le pasa el texto a la función que tú le envíes
}

// Opción A: Solo imprimirlo
obtenerMensaje((m) => console.log(m));


// Opción B: Alertarlo (aparece una ventana en el navegador)
obtenerMensaje((m) => alert(m));








// Función principal (El Cerebro)
function calculadora(a, b, operacion) {
    return operacion(a, b); 
}

// Aquí definimos las "instrucciones" (callbacks) sobre la marcha:
const suma = calculadora(10, 5, (x, y) => x + y);
const resta = calculadora(10, 5, (x, y) => x - y);
const multi = calculadora(10, 5, (x, y) => x * y);

console.log("Suma: " + suma);   // 15
console.log("Resta: " + resta); // 5
console.log("Multi: " + multi); // 50















// Definición: "procesarEntrada" es la función principal
function procesarEntrada(callback) {
    let nombre = "Usuario"; 
    
    // Aquí es donde "llamamos de vuelta" a la función que recibimos
    callback(nombre); 
}

// Ejecución: Aquí creamos la callback (la flecha) y se la pasamos
procesarEntrada((n) => {
    console.log("Callback ejecutado para: " + n);
});









const numeros = [1, 2, 3, 4, 5];

// Función principal que recorre el array
function operarConNumeros(lista, accion) {
    for (let n of lista) {
        accion(n); // Ejecutamos la "accion" que nos manden
    }
}

// Caso A: Queremos imprimir el doble
operarConNumeros(numeros, (num) => {
    console.log("El doble de " + num + " es " + (num * 2));
});

console.log("---");

// Caso B: Queremos saber si son pares
operarConNumeros(numeros, (num) => {
    if (num % 2 === 0) {
        console.log(num + " es par");
    }
});








function formatearNombre(nombre, apellido, callback) {
    return callback(nombre, apellido);
}

// Ejemplo 1: Formato para una lista de asistencia (Apellido, Nombre)
const listaAsistencia = formatearNombre("Daniel", "Scarlazzetta", (n, a) => {
    return a.toUpperCase() + ", " + n;
});

// Ejemplo 2: Formato para un diploma (Nombre Apellido)
const diploma = formatearNombre("Daniel", "Scarlazzetta", (n, a) => {
    return "Don/Doña " + n + " " + a;
});

console.log(listaAsistencia); // SCARLAZZETTA, Daniel
console.log(diploma);         // Don/Doña Daniel Scarlazzetta









function procesarEntrada(callback) {
    console.log("1. El sistema está preparando los datos...");
    let nombre = "Daniel"; 
    
    console.log("2. Los datos están listos. Llamando a la callback...");
    callback(nombre);
}

// Aquí tú decides qué pasa al final del proceso
procesarEntrada((n) => {
    console.log("3. ¡Hola " + n + "! Los datos se guardaron con éxito.");
});x    