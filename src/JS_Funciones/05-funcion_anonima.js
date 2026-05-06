(function() {
    console.log("Este código se ejecuta solo y no contamina el scope global.");
})();

//Crear una funcion anonima que suma 3 numeros
(function(){
    a=21
    b=13
    c=54
    console.log(a+b+c);
})();