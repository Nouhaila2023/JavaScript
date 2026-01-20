window.onload = iniciar;
function iniciar() {
    let fila = document.getElementById("fila");
    fila.addEventListener('click', agregarFila, false);
    let eliminarr = document.getElementById("eliminar");
    eliminarr.addEventListener('click', eliminar, false);

    const elementos = document.querySelectorAll("tr");
    elementos.forEach(function (tr) {
        tr.addEventListener("click", function () {
            tr.remove();
        });
    });

}

function agregarFila() {
    let tr1 = document.createElement('tr');
    let td1 = document.createElement('td');

    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let texto1 = document.createTextNode("4");
    let texto2 = document.createTextNode("5");
    let texto3 = document.createTextNode("6");
    td1.appendChild(texto1);
    td2.appendChild(texto2);
    td3.appendChild(texto3);
    tr1.appendChild(td1);
    tr1.appendChild(td2);

    tr1.appendChild(td3);

    let tabla = document.getElementById("tabla");
    tabla.appendChild(tr1);
    
    tr1.addEventListener("click", function () {
        tr1.remove();
    });
}
