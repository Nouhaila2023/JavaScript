//let numeroDecimal = Math.random();
//console.log(numeroDecimal); // Imprimirá un número entre 0 y 0.999...


let fila = parseInt(prompt("Número de filas:"));
let columna = parseInt(prompt("Número de columnas:"));


document.write("<table border='1'>");

for (let i = 1; i <= fila; i++) {
    document.write("<tr>");
    for (let j = 1; j <= columna; j++) {
        let color = "white";
        if (j % 3 === 0) {
            color = "orange";
        }

        let numero = prompt("Intrega Numeros -->(" + i + "," + j + ")<--");

        document.write("<td style='background:" + color + "; width:50px; height:30px; text-align:center;'>");
        document.write(numero);
        document.write("</td>");
    }
    document.write("</tr>");
}

document.write("</table>");





