document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#anadir")
    .addEventListener("click", addText, false);
  document
    .querySelector("#eliminar1")
    .addEventListener("click", deletePrimero, false);
  document
    .querySelector("#eliminar2")
    .addEventListener("click", deleteUltimo, false);
});

//Agregar Elemento
function addText() {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = prompt("Escribe un texto");
  document.querySelector("#miLista").appendChild(nuevoElemento);
  nuevoElemento.addEventListener("click", function () {
    nuevoElemento.remove();
  });
}

//Eliminar primer elemento
function deletePrimero() {
  const lista = document.querySelector("#miLista");

  if (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

//Eliminar eultimo elemento
function deleteUltimo() {
  const lista = document.querySelector("#miLista");

  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
  }
}
