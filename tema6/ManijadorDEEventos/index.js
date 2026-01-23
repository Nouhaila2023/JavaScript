window.onload = iniciar;

function iniciar() {
  document.getElementById("btnEnviar").addEventListener("click", manejador);
  document.querySelector("p").addEventListener("click", manejador);
}

function manejador(e) {

    if(e.target.closest("p")){
        switch (e.type){
            case "click":
                let texto = prompt("TExto nuevo");
                e.target.closest("p").innerHTML =  texto;
                break;
            
            case "mouseover":
                e.target.closest("p").style.backgroundColor = "yellow";
                e.target.closest("p").style.cursor = "pointer";
                break;    
        }
    }
    if(e.target.closest("#btnEnviar")){
        alert("Has pulsado el boton enviar");
        let parrafo = document.querySelectorAll("p").length;
        alert("El numero de parrafos es: " + parrafo);
    }

}


