window.onload = iniciar;
function iniciar(){
    let div = document.getElementById("contenedor");
    let nuevo = document.createElement("p");
    let texto = document.createTextNode("Este párrafo ha sido creado con JavaScript");
    nuevo.appendChild(texto);
    div.appendChild(nuevo);
}