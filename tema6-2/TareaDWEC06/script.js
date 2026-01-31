let colorActual = "red";

document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("table");

  // Crear tablero 4x4
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");
      td.textContent = Math.floor(Math.random() * 15);

      // Click en celda
      td.addEventListener("click", () => {
        if (colorActual === "red") {
          td.style.backgroundColor = "red";
        } else if (colorActual === "white") {
          td.style.backgroundColor = "white";
        }
      });

      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }

  document.getElementById("limpiar")
    .addEventListener("click", () => limpiar(tabla));

  document.getElementById("rojo")
    .addEventListener("click", () => colorActual = "red");

  document.getElementById("blanco")
    .addEventListener("click", () => colorActual = "white");

  document.getElementById("sumarRojas")
    .addEventListener("click", () => sumarRojos(tabla));

  document.getElementById("sumarBlancas")
    .addEventListener("click", () => sumarBlancas(tabla));

  document.getElementById("ajedrez")
    .addEventListener("click", () => ajedrez(tabla));
});

function limpiar(tabla) {
  tabla.querySelectorAll("td").forEach(td => {
    td.style.backgroundColor = "";
  });
}

function sumarRojos(tabla) {
  let suma = 0;
  tabla.querySelectorAll("td").forEach(td => {
    if (td.style.backgroundColor === "red") {
      suma += parseInt(td.textContent);
    }
  });
  document.getElementById("resultado").textContent =
    "Suma rojas: " + suma;
}

function sumarBlancas(tabla) {
  let suma = 0;
  tabla.querySelectorAll("td").forEach(td => {
    if (td.style.backgroundColor !== "red") {
      suma += parseInt(td.textContent);
    }
  });
  document.getElementById("resultado").textContent =
    "Suma blancas: " + suma;
}

function ajedrez(tabla) {
  const filas = tabla.querySelectorAll("tr");

  filas.forEach((fila, i) => {
    fila.querySelectorAll("td").forEach((td, j) => {
      td.style.backgroundColor =
        (i + j) % 2 === 0 ? "red" : "white";
    });
  });
}
