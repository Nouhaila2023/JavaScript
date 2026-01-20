window.onload = iniciar;
function iniciar(){
    let boton = document.getElementById("boton");
    boton.addEventListener('click' , agregarElemento , false);
    let boton2 = document.getElementById("boton2");
    boton2.addEventListener('click' , borrarPrimero , false);
    let boton3 = document.getElementById("boton3");
    boton3.addEventListener('click' , borrarUltimo , false);


}
function agregarElemento(){
    // const nuevoElemento = document.createElement("li");
    //const texto = document.createTextNode("Elemento " + (totalElementos + 1));
    //nuevoElemento.appendChild(texto);
    // document.getElementById("lista").appendChild(nuevoElemento);
    let nuevo = document.createElement("li");
    let texto = document.createTextNode(prompt("Dame el texto"));
    nuevo.appendChild(texto);
    document.getElementById("lista").appendChild(nuevo);

}
function borrarPrimero(){
    document.getElementById("lista").removeChild(document.getElementById("lista").firstChild);

}
function borrarUltimo(){
    // document.getElementById("lista").removeChild(document.getElementById("lista").lastChild);
    document.getElementById("lista").removeChild(document.getElementById("lista").lastChild);

}