function cambiaColor(){
    this.style.backgroundColor="#ccff22";
    
}
function restauraColor(){
    this.style.backgroundColor="red";
}
document.getElementById("caja").addEventListener('mouseover',cambiaColor,false);
document.getElementById("caja").addEventListener('mouseout',restauraColor,false);
document.getElementById("parrafo").addEventListener("click",cambiaColor,false);