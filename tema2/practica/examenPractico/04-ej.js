

function piramide(){

    let caracter = prompt("Intrega un caracter:");
    let num = parseInt(prompt("Intrega un numero"));


    for(let i = num; i >= 1 ; i--){
        document.write("<br>");
        for(let j = 1; j <= i; j++){
            document.write(caracter);
        }
    }

}

piramide();