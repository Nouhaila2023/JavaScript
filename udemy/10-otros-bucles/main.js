//Bucle while 


let ano = 1990;

let objeto = 2177;

let interferencia = 2024;

while (ano != objeto) {

    document.write(`Estamos en el año: ${ano} <br>`);

    if (ano === interferencia) {
        document.write("¡Estamos en el año de la interferencia! <br>");
        break;
    }

    ano++;
}

document.write("<br><br>");

//Do while

do {
    document.write(`Estamos en el año: ${ano} <br>`);
    ano++;
} while (ano < objeto);























