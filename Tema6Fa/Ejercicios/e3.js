window.onload = iniciar;
function iniciar() {
    let boton = document.getElementById("anadir");
    boton.addEventListener('click', anadir, false);
    let eliminarr = document.getElementById("eliminar");
    eliminarr.addEventListener('click', eliminar, false);

}
function anadir() {
    let nuevo = document.createElement("li");
    let texto = document.createTextNode(prompt("Dame un elemento"));
    nuevo.appendChild(texto);
    document.getElementById("lista").appendChild(nuevo)
}
function eliminar() {

    let numero = parseInt(prompt("Dame el número del elemento a eliminar"));
    const elementos = document.querySelectorAll("li");

    let indice = numero - 1;

    if (indice >= 0 && indice < elementos.length) {
        lista.removeChild(elementos[indice]);
    } else {
        alert("Ese número no existe en la lista");
    }
}