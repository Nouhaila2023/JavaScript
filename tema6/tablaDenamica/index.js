window.onload = iniciar;
function iniciar(){
    document.getElementById("tabla").addEventListener('click' , gestionarTabla);

}

function gestionarTabla(e){
    if(e.target.classList.contains("anadir")){
        insertarFila(e.target);
    }
    if(e.target.classList.contains("eliminar")){
        eliminarFila(e.target);
    }
}


function insertarFila(boton){
    let tabla = document.getElementById("tabla");
    let nuevaFila = document.createElement('tr');

    for(let i = 1; i <= 3; i++){
        let td = document.createElement('td');

        td.textContent = document.getElementById("celda" + i).value;

        nuevaFila.appendChild(td);

    }

    let tdBotones = document.createElement("td");

    tdBotones.innerHTML = '<button class="anadir">+</button> <button class="eliminar">-</button>';

    nuevaFila.appendChild(tdBotones);


    let filaActual = boton.closest("tr");

    tabla.insertBefore(nuevaFila, filaActual);
}


function eliminarFila(boton){
    let fila = boton.closest("tr");

    fila.remove();
}