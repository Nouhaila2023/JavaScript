/*
Ejercico 01:
Calcula cuantas horas le llevaria llegar a la luna a una nave espacial y 

guarda el resuñtado en una variavle.
la distancia desde la tienrra hasta la luna es de 384.400Kilometros.

la velocidad de la nacve es de 1225 kilometros por hora
*/

const distansiaTierraLuna = 384400; // en kilometros
const velocidadNave = 1225; // en kilometros por hora

const tiempoEnHoras = distansiaTierraLuna / velocidadNave;

console.log("Distancia de la Tierra a la Luna: " + distansiaTierraLuna + " km");
document.log("Tiempo en horas para llegar a la luna: " + tiempoEnHoras + " horas");
