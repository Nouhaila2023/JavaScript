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
  //crear nuevo elemento
  const nuevoElemento = document.createElement("li");
  //Pedir texto al usuario
  nuevoElemento.textContent = prompt("Escribe un texto");
  //Agregar el li a la lista
  document.querySelector("#miLista").appendChild(nuevoElemento);

  //Permitir eliminar el elemento al hacer clic
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
