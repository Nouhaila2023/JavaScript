window.onload = iniciar;
function iniciar() {
    for (let i = 1; i <= 5; i++) {
        const nuevoElemento = document.createElement("li");
        const texto = document.createTextNode("Elemento " + i);
        nuevoElemento.appendChild(texto);
        document.getElementById("lista").appendChild(nuevoElemento);
    }
    const boton = document.getElementById("boton");
    boton.addEventListener("click", agregarElemento);
    const botonEliminar = document.getElementById("lista");
    botonEliminar.addEventListener("click", eliminarLista);
    const botonEliminarElemento = document.getElementById("ultimo");
    botonEliminarElemento.addEventListener("click", eliminarElementodeLista);
}

function agregarElemento() {
  //  let contador = document.getElementById("lista").children.length + 1;
   // let contador =  document.getElementById("lista").childElementCount + 1;
   let totalElementos = document.querySelectorAll("#lista li").length;
    const nuevoElemento = document.createElement("li");
    const texto = document.createTextNode("Elemento " + (totalElementos + 1));
    nuevoElemento.appendChild(texto);
    document.getElementById("lista").appendChild(nuevoElemento);
}
function eliminarLista(){
    const lista = document.getElementById("lista").remove();
}
function eliminarElementodeLista(){
    const numeroElementos = document.querySelectorAll("#lista li").length;
    if (numeroElementos > 0) {
        document.getElementById("lista").removeChild(document.getElementById("lista").lastChild);
    }
    
}
