window.onload = inicio;

function inicio() {

    for (let i = 0; i < 5; i++) {
        let li = document.createElement("li");
        let texto = document.createTextNode("Elemento " + (i + 1));
        li.appendChild(texto);
        document.getElementById("lista").appendChild(li);
    }

    document.getElementById("agregar")
        .addEventListener("click", agregarElemento);
}

function agregarElemento() {
    let contador = document.querySelectorAll("#lista li").length + 1;

    let li = document.createElement("li");
    let texto = document.createTextNode("Elemento " + contador);
    li.appendChild(texto);
    document.getElementById("lista").appendChild(li);
}

function eliminarElemento() {
    let lista = document.getElementById("lista");
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastChild);
    }
}
