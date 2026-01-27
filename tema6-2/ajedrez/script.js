document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.querySelector("table");

  for (var i = 0; i < 8; i++) {
    const tr = document.createElement("tr");

    for (var j = 0; j < 8; j++) {
      const td = document.createElement("td");

      if ((i + j) % 2 == 0) {
        td.classList.add("white");
      } else {
        td.classList.add("black");
      }

      let pieza = "";

      if (i === 1) {
        pieza = "peonB";
      } else if (i === 6) {
        pieza = "peonN";
      } else if (i === 0) {
        const piezasFila0 = [
          "torreB",
          "caballoB",
          "alfilB",
          "reinaB",
          "reyB",
          "alfilB",
          "caballoB",
          "torreB",
        ];
        pieza = piezasFila0[j];
      } else if (i === 7) {
        const piezasFila7 = [
          "torreN",
          "caballoN",
          "alfilN",
          "reinaN",
          "reyN",
          "alfilN",
          "caballoN",
          "torreN",
        ];
        pieza = piezasFila7[j];
      }

      if (pieza !== "") {
        const img = document.createElement("img");
        img.src = `fichas/${pieza}.png`;
        td.appendChild(img);
      }

      tr.appendChild(td);
    }

    tabla.appendChild(tr);
  }
});
