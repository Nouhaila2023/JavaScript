
let contador = 0;
let vocales = "aeiuoAEIOU";
let texto = "";
let caracter;

do{
    caracter = prompt("Entrega un caracter y si quieres salir pulsa * .");
    if(caracter !== "*"){
        if(vocales.includes(caracter)){
            texto += caracter.toUpperCase();
            contador++;
        }else{
            texto += caracter.toLowerCase();
        }
    }
    

}while(caracter != "*");

console.log("Resultado:", texto, contador, "Vocales");
alert("Resultado: " + texto + " " + contador + " Vocales");
document.write("Resultado: " + texto + " (" + contador + " Vocales)");



























