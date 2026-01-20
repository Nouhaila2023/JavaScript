window.onload = iniciar;

function iniciar() {
    // Botón para agregar texto
    document.getElementById("anadirTexo").addEventListener("click", agregarElemento);
    
    // Botón para borrar primer elemento
    document.getElementById("botonPremiro").addEventListener("click", borrarPrimero);
    
    // Botón para borrar último elemento
    document.getElementById("botonUltimo").addEventListener("click", borrarUltimo);
}

function agregarElemento() {
    const texto = prompt("Introduce el texto del nuevo elemento");
    if (texto !== null && texto.trim() !== "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = texto;
        document.getElementById("lista").appendChild(nuevoLi);
    }
}

function borrarPrimero() {
    const lista = document.getElementById("lista");
    if (lista.firstElementChild) {
        lista.removeChild(lista.firstElementChild);
    }
}

function borrarUltimo() {
    const lista = document.getElementById("lista");
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}
