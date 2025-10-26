//funciones
//Una funcion es una seri agrupa una ceria de instrucciones que puedes usarla varias veces de instrucciones que puedes usarla varias veces
//para definir una funcion usamos la palabra reservada 

function saludar(){
    //cuerpo de la funcion
    document.write("Hola mundo");
}

//para invocar o llamar a la funcion usamos su nombre seguido de parentesis
let resultado1 = saludar();
document.write(resultado1);
document.write("<br>");


function miFuncion(){
    document.write("Mi primera funcion");
}

let resultaro2 = miFuncion();
document.write(resultaro2);
document.write("<br>");

//funcion con parametros
function saludar2(nombre, edad){
    document.write("Hola " + nombre + " tienes " + edad + " años");
}

let resultado3 = saludar2("Juan", 25);
document.write(resultado3);
document.write("<br>");

//funcion con retorno de valor
function sumar(a, b){
    return a + b;
}

let resultado4 = sumar(5, 10);
document.write("La suma es: " + resultado4);
document.write("<br>");

//funcion anonima
let resta = function(a, b){
    return a - b;
}

let resultado5 = resta(10, 5);
document.write("La resta es: " + resultado5);
document.write("<br>");

//funcion flecha
let multiplicar = (a, b) => {
    return a * b;
}

let resultado6 = multiplicar(5, 10);
document.write("La multiplicacion es: " + resultado6);      
  

document.write("<br>");


//Funcion dentro de otra funcion

function operacion(a, b){
    function suma(){
        return a + b;
    }
    document.write("<br>");
    function resta(){
        return a - b;
    }
    document.write("Suma: " + suma() + "<br>");
    document.write("Resta: " + resta() + "<br>");
}

operacion(10, 5);



function operacion(num1,num2){

    let resultado = (`El resultado de la suma es: ${num1 + num2}
    <br>El resultado de la resta es: ${num1 - num2}
    <br>El resultado de la multiplicacion es: ${num1 * num2}
    <br>El resultado de la division es: ${num1 / num2}`);
    return resultado;

}

function mostrarOperacion(num1,num2){
    let resultadoFinal = operacion(num1,num2);
    document.write(resultadoFinal);
}

mostrarOperacion(10,5);

  document.write("<br>");


//Parametros REST

function sumarTodo(...numeros){
    let suma = 0;
    for(let numero of numeros){
        suma += numero;
    }
    return suma;
}

let resultado7 = sumarTodo(1, 2, 3, 4, 5);
document.write("La suma de todos los numeros es: " + resultado7);



  document.write("<br>");

//Parametros por defecto

function saludar3(nombre = "Invitado"){
    document.write("Hola " + nombre);
}

saludar3();
document.write("<br>");
saludar3("Pedro");

    document.write("<br>");

//Funciones recursivas

function factorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

let resultado8 = factorial(5);
document.write("El factorial de 5 es: " + resultado8);      



//Funciones IIFE (Immediately Invoked Function Expression)

(function(){
    document.write("<br>");
    document.write("Funcion IIFE ejecutada");
})();


//Operador SPREAD

let numeros = [1, 2, 3, 4, 5];

function sumarNumeros(a, b, c, d, e){
    return a + b + c + d + e;
}

let resultado9 = sumarNumeros(...numeros);
document.write("<br>");
document.write("La suma usando SPREAD es: " + resultado9);














