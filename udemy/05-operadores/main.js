//Operadores Aritmeticos (Matematicos)
let num1 = 5;
let num2 = 2;

let suma = num1 + num2;

document.write(num1 + "+" + num2 + "=" + suma);
document.write("<br>");

let resta = num1 - num2;

document.write(num1 + "-" + num2 + "=" + resta);
document.write("<br>");

let multiplicacion = num1 * num2;

document.write(num1 + "*" + num2 + "=" + multiplicacion);
document.write("<br>");

let division = num1 / num2;

document.write(num1 + "/" + num2 + "=" + division);
document.write("<br>");

let modulo = num1 % num2;

document.write(num1 + "%" + num2 + "=" + modulo);
document.write("<br>");

let potencia = num1 ** num2;

document.write(num1 + "**" + num2 + "=" + potencia);
document.write("<br>"); 


//Operadores Asignacion

let numero = 10;
numero += 5;
document.write(numero);
document.write("<br>");
numero -= 3;
document.write(numero);
document.write("<br>");



//Operadores Comparacion

let a = 5;

console.log(a == 5); //Igualdad
console.log(a === 5); //Identidad
console.log(a != 3); //Diferencia
console.log(a !== 3); //No Identico
console.log(a > 3); //Mayor que
console.log(a < 3); //Menor que
console.log(a >= 5); //Mayor o Igual que
console.log(a <= 5); //Menor o Igual que    


//Operadores Logicos


let enMayorEdad = true;
let tieneEntrada = true;

let puedeEntrar = enMayorEdad && tieneEntrada; //AND
document.write(puedeEntrar);
document.write("<br>");

let puedeEntrar2 = enMayorEdad || tieneEntrada; //OR
document.write(puedeEntrar2);
document.write("<br>");

let puedeEntrar3 = !enMayorEdad; //NOT
document.write(puedeEntrar3);
document.write("<br>");     


//Operadores Cadena

let mensaje1 ="Hola ";
let mensaje2 ="Mundo";

let mensajeCompleto = mensaje1 + mensaje2;

document.write(mensajeCompleto);
document.write("<br>");

let mensajeRepetido = mensaje1.repeat(3);

document.write(mensajeRepetido);
document.write("<br>");


//Operadores Incremento y decremento

let cifras = 5;
cifras++;
document.write(cifras);








