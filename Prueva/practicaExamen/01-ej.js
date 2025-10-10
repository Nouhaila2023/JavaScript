function operaciones(num1, num2, num3, num4, num5) {
  const suma = num1 + num2 + num3 + num4 + num5;
  const promedio = suma / 5;

  let mayor = num1;
  if (num2 > mayor) mayor = num2;
  if (num3 > mayor) mayor = num3;
  if (num4 > mayor) mayor = num4;
  if (num5 > mayor) mayor = num5;

  let menor = num1;
  if (num2 < menor) menor = num2;
  if (num3 < menor) menor = num3;
  if (num4 < menor) menor = num4;
  if (num5 < menor) menor = num5;

  const producto = num1 * num2 * num3 * num4 * num5;

  return { suma, promedio, mayor, menor, producto };
}

function mostrarResultados() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const n3 = parseFloat(document.getElementById("num3").value);
  const n4 = parseFloat(document.getElementById("num4").value);
  const n5 = parseFloat(document.getElementById("num5").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
    document.getElementById("resultado").innerHTML = "<b>Por favor ingresa los 5 números.</b>";
    return;
  }

  const r = operaciones(n1, n2, n3, n4, n5);

  document.getElementById("resultado").innerHTML = `
    <p><b>Suma:</b> ${r.suma}</p>
    <p><b>Promedio:</b> ${r.promedio}</p>
    <p><b>Mayor:</b> ${r.mayor}</p>
    <p><b>Menor:</b> ${r.menor}</p>
    <p><b>Producto:</b> ${r.producto}</p>
  `;
}
