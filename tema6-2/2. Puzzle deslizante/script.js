document.addEventListener("DOMContentLoaded", function () {

    const tablero = document.getElementById("tablero");

    const imagenes = [
        "img/1.gif", "img/2.gif", "img/3.gif", "img/4.gif",
        "img/5.gif", "img/6.gif", "img/7.gif", "img/8.gif",
        "img/9.gif", "img/10.gif", "img/11.gif", "img/12.gif",
        "img/13.gif", "img/14.gif", "img/15.gif", "img/blanco.gif"
    ];

    imagenes.sort(function () {
        return Math.random() - 0.5;
    });

    for (let i = 0; i < imagenes.length; i++) {
        const img = document.createElement("img");
        img.src = imagenes[i];
        tablero.appendChild(img);
    }

});


function moverPieza(event) {
    const piezaClicada = event.target;
    console.log("Pieza clicada:", piezaClicada);

    
        
}
