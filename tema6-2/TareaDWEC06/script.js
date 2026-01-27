document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("table");

  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");
      td.textContent = Math.floor(Math.random() * 15);
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }

  document
    .getElementById("limpiar")
    .addEventListener("click", () => limpiar(tabla));

  document
    .getElementById("rojo")
    .addEventListener("click", () => rojo(tabla));

  document
    .getElementById("sumarRojas")
    .addEventListener("click", () => sumarRojos(tabla));

  document
    .getElementById("sumarBlancas")
    .addEventListener("click", () => sumarBlancas(tabla));
    document
    .getElementById("ajedrez")
    .addEventListener("click", () => ajedrez(tabla));
    
});

function limpiar(tabla) {
  const e = tabla.querySelectorAll("td");
  e.forEach((td) => {
    td.style.backgroundColor = "";
  });
}

function rojo(tabla) {
  const e = tabla.querySelectorAll("td");

}

function sumarRojos(tabla) {
  const e = tabla.querySelectorAll("td");
  let suma = 0;

  e.forEach((td) => {
    if (td.style.backgroundColor === "red") {
      suma += parseInt(td.textContent);
    }
  });

  document.writeln("Suma rojas: " + suma);
}

function sumarBlancas(tabla) {
  const e = tabla.querySelectorAll("td");
  let suma = 0;

  e.forEach((td) => {
    if (td.style.backgroundColor !== "red") {
      suma += parseInt(td.textContent);
    }
  });

  document.writeln("Suma Blancas: " + suma);
}

function ajedrez(tabla) {
  const filas = tabla.querySelectorAll("tr");

  filas.forEach((fila, i) => {
    const e = fila.querySelectorAll("td");
    e.forEach((e, j) => {
      if ((i + j) % 2 === 0) {
        e.style.backgroundColor = "red";
      } else {
        e.style.backgroundColor = "white";
      }
    });
  });
}














