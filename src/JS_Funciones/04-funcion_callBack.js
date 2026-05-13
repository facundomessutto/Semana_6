/*
// La función principal: Ella tiene el mensaje, pero no sabe qué hacer con él.
function obtenerMensaje(callba) {
    const texto = "¡Clase de JS terminada!";
    callba(texto); // Le pasa el texto a la función que tú le envíes
}

// Opción A: Solo imprimirlo
obtenerMensaje((m) => console.log(m));


// Opción B: Alertarlo (aparece una ventana en el navegador)
obtenerMensaje((m) => alert(m));
*/




/*


// Función principal (El Cerebro)
function calculadora(a, b, operacion) {
    return operacion(a, b); 
}

// Aquí definimos las "instrucciones" (callbacks) sobre la marcha:
const suma = calculadora(10, 5, (x, y) => x + y);
const resta = calculadora(10, 5, (x, y) => x - y);
const multi = calculadora(10, 5, (x, y) => x * y);

console.log("Suma: " + suma);   // 15
console.log("Resta: " + resta); // 5j
console.log("Multi: " + multi); // 50

*/












/*
// Definición: "procesarEntrada" es la función principal
function procesarEntrada(callback) {
    let nombre = "Facundo"; 
    
    // Aquí es donde "llamamos de vuelta" a la función que recibimos
    callback(nombre); 
}

// Ejecución: Aquí creamos la callback (la flecha) y se la pasamos
procesarEntrada((n) => {
    console.log("Callback ejecutado para: " + n);
});


function NomUsuario(calva){
    let nombre = "Facundo";

    calva(nombre);
}
NomUsuario((n) => {
    console.log("Hola "+ n);
})
*/






/*

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

console.log("-----------------------------");

// Caso B: Queremos saber si son pares o impares

operarConNumeros (numeros, (num) => {
    if (num % 2 === 0) {
        console.log(num + " es numero par");
    }else{
        console.log(num + " es numero impar");
    }
});

*/


/*

console.log("---------------------------------------------");
function FormateaNom(nombre, apellido, callback){
    return callback(nombre, apellido);
}

const LlamarAsis = FormateaNom("Facundo", "messutto", (n, a) =>{
    return n () + ", " + a;
})

*/


/*

function formatearNombre(nombre, apellido, callback) {
    return callback(nombre, apellido);
}

// Ejemplo 1: Formato para una lista de asistencia (Apellido, Nombre)
const listaAsistencia = formatearNombre("Daniel", "Scarlazzetta", (n, a) => {
    return a.toUpperCase() + ", " + n;
});

// Ejemplo 2: Formato para un diploma (Nombre Apellido)
const diploma = formatearNombre("", "Facundo Messutto", (n, a) => {
    return "Don/Doña " + n + " " + a;
});

console.log(listaAsistencia); // SCARLAZZETTA, Daniel
console.log(diploma);         // Don/Doña Daniel Scarlazzetta

*/





/*

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

*/


/*
//Callback que valida funcion


//Funcion principal recibe un dato y funcion que decide si es valido
function ValidarDato (dato, callback){
    if(callback(dato)){
        console.log("Dato valido: " + dato);
    }else{
        console.log("Dato invalido: " + dato);
    }
}
//valida si el numero es mayor a 10
ValidarDato(15, (n)=> n < 10);
ValidarDato(5, (n)=> n < 10);
*/

/*
//funcion principal: recibe un texto y una funcion que lo modifica
function TransformarTexto(texto, callback){
    return callback(texto);
}

//callback 1: convertir a mayusculas
const mayus = TransformarTexto("hola mundo", (t) => t.toUpperCase());

//callback 2: agregar  signos
const exclamacion = TransformarTexto("hola mundo", (t) => "¡¡"+ t + "!!");

//callback 3: TODAS LAS ANTERIORES (ambos juntos)
const mayusExclamacion = TransformarTexto("hola mundo", (t) => "¡¡"+ t.toUpperCase() + "!!");


console.log(mayus); //HOLA MUNDO
console.log(exclamacion); //¡¡hola mundo!!
console.log(mayusExclamacion); //¡¡HOLA MUNDO!!

*/

/*
function repetirAccion(veces, callback){
    for (let i = 1; i <= veces; i++){
    callback(i);
    }
}

repetirAccion(3,(num)=>{
    console.log("Ejecucion numero: " + num);
})

function repetirWea(v,){

}

*/
console.log("---------------------------");

/*
//Simulacion simple de proceso (mas realista)
//funcion principal: simula un proceso de compra
function procesarCompra(producto, callback){
    console.log("Procesando compra de: " + producto);
//aqui se ejecuta lo que queremos hacer despues
    callback(producto);
}
//callback 1: mostrar mensaje de texto
procesarCompra("Notebook", (p) => {
    console.log("Compra realizada con exito de: " + p);
})

console.log("-------------------");
//callback 2: generar boleta

procesarCompra("Notebook", (p) => {
    console.log("Genarando boleta para: " + p);
})

*/


//Procesador  con multiples callbacks ()
//Funcion principal: recibe una lista y 3 callbacks
function procesarDatos(lista, filtro, transformador, accionFinal){
    let resultado = [];

    for (let elemento of lista){
        //1. Primero decidimos si el elemento pasa el filtro
        if(filtro(elemento)){
            //2. Luego, transformamos al elemento
            let transformado = transformador(elemento);
            //3. Guardamos el resultado
            resultado.push(transformado);
        }
    }
    //4. Finalmente ejecutamos una accion con todos los resultados
    accionFinal(resultado);
};


//lista de numeros
const numeros = [1,2,3,4,5,6];
//EJECUCION aqui esta compelto
//Estamos pasando 3 callbacks distintos al mismo tiempo
ProcesarDatos(
    numeros,
    //callback 1: FILTRO (solo numneros pares)
    (n) => n %2 === 0,

    //callback2: ACCION (muestra por 10)
    (n) => n*10,
    //callback3: ACCION FINAL (mostrar resultados )
    (resultado) => {
        console.log("Resultado dinal:");
        for (let r of resultado) {
            console.log(r);
        }
    }
)








