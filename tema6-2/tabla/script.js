
document.addEventListener("DOMContentLoaded" , () =>{

    document.querySelector("#anadirFila").addEventListener("click", addFila, false);
    document.querySelector("#eliminarFila").addEventListener("click", deleteFila, false);

    //Eliminar fila haciendo clic en ella

     document.querySelectorAll("tr").forEach(fila => {
        fila.addEventListener("click", () => {
            fila.remove();
        });
    });

});


function addFila(){

    //slecciona la tanla
    const tabla = document.querySelector("#miTabla");
    //crear una fila
    const fila = document.createElement("tr");

    for(let i=0; i<2; i++){
        let col = document.createElement("td");
        col.textContent = prompt("Escrebe el contenido");
        fila.appendChild(col);

        fila.addEventListener("click", function(){
            fila.remove();
        });
    }

    tabla.appendChild(fila);
}

function deleteFila(){
    //const filas = document.querySelector("tr");
    //filas.remove();

    const filas = document.querySelectorAll("#miTabla tr");

    // Evita borrar el encabezado
    if (filas.length > 1) {
        filas[filas.length - 1].remove();
    }

}
























