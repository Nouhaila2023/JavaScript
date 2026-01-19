window.onload=iniciar;

function iniciar(){
    let boton=document.getElementById("boton");
    boton.addEventListener("click",agregarParrafo,false);
    let boton2=document.getElementById("boton2");
    boton2.addEventListener("click",agregarimagenCaja,false);

}
function agregarParrafo(){
    //Crear el nuevo parrafo
    let nuevoParrafo=document.createElement("p");
    let texto=document.createTextNode("Este es un nuevo parrafo creado con JavaScript");
    nuevoParrafo.appendChild(texto);
    document.getElementById("primero").appendChild(nuevoParrafo);

}
function agregarimagenCaja(){               
    let imagen=document.createElement("img");
    imagen.src="./conecta/imagenes/piezamarilla.png";
    imagen.setAttribute("width","500px");
    imagen.setAttribute("alt","pieza marilla");
    document.getElementById("caja").appendChild(imagen);
}