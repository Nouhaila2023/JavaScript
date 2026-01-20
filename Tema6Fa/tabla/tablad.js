window.onload = iniciar;

function iniciar() {
    document.getElementById("fila").addEventListener("click", agregarFila);
    const elementos = document.querySelectorAll("tr");
    let eliminar = document.getElementById("eliminar");
    elementos.forEach(function (tr) {
        eliminar.addEventListener("click", function () {
            tr.remove();
        });
    });
}

function agregarFila() {

    let v1 = document.getElementById("celda1").value;
    let v2 = document.getElementById("celda2").value;
    let v3 = document.getElementById("celda3").value;

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.textContent = v1;
    td2.textContent = v2;
    td3.textContent = v3;

    let btnMas = document.createElement("button");
    btnMas.textContent = "+";
    btnMas.addEventListener("click", agregarFila);

    let btnMenos = document.createElement("button");
    btnMenos.textContent = "-";
    btnMenos.addEventListener("click", function () {
        tr.remove();
    });

    td4.appendChild(btnMas);
    td4.appendChild(btnMenos);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("tabla").appendChild(tr);
}