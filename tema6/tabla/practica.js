window.onload = iniciar;

function iniciar() {
  /*  let primerParrafo = document.getElementById("primero");
    primerParrafo.style.color = "blue";
    const nuevoParrafo = document.createElement("p");
    const texto = document.createTextNode("Este es un nuevo párrafo añadido dinámicamente.");
    nuevoParrafo.appendChild(texto);
    primerParrafo.appendChild(nuevoParrafo);
    const otroParrafo = document.createElement("p");
    otroParrafo.textContent= "Eso es otro parrafo";
    nuevoParrafo.appendChild(otroParrafo);

    const cuarto = document.createElement("p");
    cuarto.textContent =prompt("Introduce el texto del cuatro parrafo");
    nuevoParrafo.appendChild(cuarto);
   const parrafos = document.querySelectorAll("p");*/
    const boton = document.getElementById("boton");
    boton.addEventListener("click", agregarParrafo);

}

window.onload = iniciar;

function iniciar() {
    const boton = document.getElementById("boton");
    boton.addEventListener("click", agregarParrafo);

    const botonImagen = document.getElementById("boton2");
    botonImagen.addEventListener("click", agregarImagenCaja);
}

function agregarParrafo() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo añadido dinámicamente.";
    document.body.appendChild(nuevoParrafo);
}

function agregarImagenCaja() {
    const imagen = document.createElement("img");
    imagen.src = "img1.jpg";
    imagen.width = 200;
    imagen.height = 150;
    imagen.alt = "img";
    document.getElementById("caja").appendChild(imagen);
}
