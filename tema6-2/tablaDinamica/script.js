document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#tabla").addEventListener("click", gestionarTabla);
});

function gestionarTabla(e) {
  if (e.target.classList.contains("del")) {
    delRow(e.target);
  }

  if (e.target.classList.contains("add")) {
    addROW(e.target);
  }
}

function delRow(boton) {
  const fila = boton.closest("tr");

  fila.remove();
}

function addROW(boton) {
  const fila = document.createElement("tr");
  const tabla = document.querySelector("#tabla");

  for (let i = 1; i <= 3; i++) {
    const td = document.createElement("td");
    td.textContent = document.querySelector("#c" + i).value;
    fila.appendChild(td);
  }

  const botonesTd = document.createElement("td");
  botonesTd.innerHTML =
    '<input type="button" class="add" value="+"> ' +
    '<input type="button" class="del" value="-">';

  fila.appendChild(botonesTd);

  const filaActual = boton.closest("tr");
  tabla.insertBefore(fila, filaActual);
}
