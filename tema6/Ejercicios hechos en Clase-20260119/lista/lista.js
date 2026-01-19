window.onload=iniciar;
function iniciar(){
    for(let i=1;i<=5;i++)  {
        let elementoLi=document.createElement("li");
        let textoLi=document.createTextNode("Elemento de lista "+i);
        elementoLi.appendChild(textoLi);
        document.getElementById("lista").appendChild(elementoLi);
            } 
        document.getElementById("boton").addEventListener("click",agregarElemento,false); 
        document.getElementById("boton2").addEventListener("click",eliminarelementoDeListaUltimo,false);    
        document.getElementById("lista").addEventListener("click",eliminarLista,false);    
}
function agregarElemento(){
    const totalElementos=document.querySelectorAll("#lista li").length;
    let elementoLi=document.createElement("li");
    let textoLi=document.createTextNode("Nuevo elemento de lista "+(totalElementos+1));
    elementoLi.appendChild(textoLi);
    document.getElementById("lista").appendChild(elementoLi);
}
function eliminarelementoDeListaUltimo(){
    const numeroElementos=document.querySelectorAll("#lista li").length;
    if(numeroElementos>0){
        document.getElementById("lista").removeChild(document.getElementById("lista").lastChild);
    }
}