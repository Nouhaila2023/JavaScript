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
    const botonImagen = document.getElementById("boton2");
    botonImagen.addEventListener("click", agregarImagenCaja);

}
function agregarParrafo(){
    //crear un nuevo parrafo
    const nuevoParrafo = document.createElement("p");
    let texto = document.createTextNode("Este es un nuevo párrafo añadido dinámicamente.");
    nuevoParrafo.appendChild(texto);
    //agregar el parrafo al final del body
    document.getElementById("primero").appendChild(nuevoParrafo);

}
function agregarImagenCaja(){
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = "img/image.png";
   // nuevaImagen.alt = "Imagen añadida dinámicamente";
   nuevaImagen.setAttribute("width","200" , "height","150");
   nuevaImagen.setAttribute("alt","Imagen añadida dinámicamente");
    document.getElementById("caja").appendChild(nuevaImagen);

}