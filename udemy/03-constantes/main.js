//Constante
//una variable cuyo conyenido nunca jamas de los jamases va a cambiar
//se define con la palabra reservada const

let nombre = "Nouhaila";
let gmail = "nouhailaelhaloui61@gmail.com";
const NIE = "Y1234567X"; //constante

console.log("Mi nombre es: " + nombre);
console.log("Mi gmail es: " + gmail);
console.log("Mi NIE es: " + NIE);

nombre = "Pepe";
//NIE = "Z7654321X"; //esto da error porque las constantes no pueden cambiar de valor

console.log("Mi nombre es: " + nombre + ", mi gmail es: " + gmail + " y mi NIE es: " + NIE);

nombre = "Ana";
document.write("Mi nombre es: " + nombre + ", mi gmail es: " + gmail + " y mi NIE es: " + NIE);