//Definimos una variable numero
var numero = 10;

//Utilizamos el fot para incrementar en 1 cada numero
for (var i = 1; i <= numero; i++) {
    console.log("Numero: ", i);
}
console.log("-----------------------------------");

//Utilizamos el for para decrementar el numero en 1
for (var i = 10; i >= 1; i--) {
    console.log("Numero: ", i);
}
console.log("-----------------------------------");

//Buscamos el numero par, pero notar que estamos sumando 2
for (var i = 2; i <= numero; i += 2) {
    console.log("Par: ", i);
}
console.log("-----------------------------------");

//Identificamos los numeros par e impar
for (var i = 1; i <= numero; i++) {
    var esPar = i % 2 === 0;
    if (esPar) {
        console.log(i + " es par");
    } else {
        console.log(i + " es impar");
    }
}

console.log("-----------------------------------");
console.log("-----------------------------------");
console.log("-----------------------------------");

//Definimos un Array de String, en este caso de frutas
var frutas = ["manzana", "pera", "uva", "naranja"];

//Recorremos el Array, recordar que las listas empiezan del: 0, 1, 2...
for (var i = 0; i < frutas.length; i++) {
    console.log("Fruta: ", frutas[i]);
}

console.log("-----------------------------------");

//ForEach
frutas.forEach(function (fruta) {
    console.log("Fruta con ForEach: ", fruta);
}
);
console.log("-----------------------------------");

//Version optimizada para listas mas pequeñas
for (var fruta of frutas) {
    console.log("Fruta: ", fruta);
}
console.log("-----------------------------------");

//Recorrer la funcion con MAP, y agregar cambios
var frutasMayusculas = frutas.map(function (fruta) {
    return fruta.toUpperCase();
});
console.log(frutasMayusculas);

console.log("-----------------------------------");

//version koptimizada para listas mas pequeñas
var ucm =["Iron","Hulk","Thor","Gru"];

for (var i of ucm){
    console.log("Personajes: ", i);
}
console.log("-----------------------------------");

//Recorre la funcion com MAP, y agregar cambios
var ucmMayusculas = ucm.map(function (ucm) {
    return ucm.toUpperCase();
});
console.log(ucmMayusculas);
console.log("-----------------------------------");

//Lo mismo pero en minusculas
var ucmMayusculas = ucm.map(function (ucm) {
    return ucm.toLowerCase();
});
console.log(ucmMayusculas);

console.log("-----------------------------------");

//Definir Array
var bandas = ["Adema","AC/DC","Angra","As lie day"];

//Filtrar bandas que tenga 5 caracteres
var bandasCortas = bandas.filter(function (filtro){
    return filtro.length <= 5;
})
console.log(bandasCortas);










































































