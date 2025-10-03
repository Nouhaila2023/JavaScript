/*Ejercicio 6
En mi tienda de videojuegos tenemos una oferta.
si compras un juego de 50€ o mas, te hacemos un 20% de descuento
si un cliente compra eñ tekken 15 que cuesta 50€ ¿en cuanta se le queda?*/

let precio = 50;
let descuento = 0.20;

if (precio >= 50) {
    precio = precio - (precio * descuento);
}

console.log(`El precio final es de ${precio}€`);
