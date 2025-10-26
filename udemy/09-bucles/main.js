// bucle for
//BHucle es una estructura de control que ejecuta un bloque de codige 
//varias veces de forma automatica mientras que es cumpla una condicion


for (let i = 0; i < 10; i++) {
    document.write("Iteración número: " + i+ "<br>");
}

// bucle while
let j = 0;
while (j < 10) {
    document.write("While Iteración número: " + j + "<br>");
    j++;
}

// bucle do...while
let k = 0;
do {
    document.write("Do...While Iteración número: " + k + "<br>");
    k++;
} while (k < 10);

// bucle for...of
const array = ['a', 'b', 'c', 'd'];
for (const elemento of array) {
    document.write("For...of elemento: " + elemento + "<br>");
}

// bucle for...in
const objeto = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
for (const clave in objeto) {
    document.write(`For...in clave: ${clave}, valor: ${objeto[clave]}` + "<br>");
}





//Ejemplo 1:

let limite = 177;
for (let i = 0; i <= limite; i++) {
    document.write(`Número actual es: ${i} <br>`);
}


//Ejemplo 2:

