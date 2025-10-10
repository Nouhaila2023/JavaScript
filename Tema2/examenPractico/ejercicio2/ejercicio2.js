function caracter() {

    let contadorVocales = 0;
    const vocales = "aeiou";
    let resultado = "";
    let entrada;


    do {

        entrada = prompt("Introduce un caracter:");

        if(entrada === "*")break;

        let letra = entrada.toLowerCase();
        
        if (vocales.includes(letra)) {
            resultado += letra.toUpperCase();
            contadorVocales++;

        } else {
            resultado += letra;
        }


    } while (entrada !== "*");

    document.getElementById("resultado").innerHTML = `
        <p><b>Texto convertido:</b> ${resultado}</p>
        <p><b>Vocales introducidas:</b> ${contadorVocales}</p>
    `;
    
}