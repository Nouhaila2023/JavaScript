function saludar(){


    let nombre = document.getElementById("Nombre").value;

    let apellidos = document.getElementById("Apellido").value;

    let aficiones = document.getElementById("Aficiones").value;

    alert(`Hola ${nombre} ${apellidos}, desde JavaScript. Veo que te gusta ${aficiones}`);

}

function cambiarColor(){
    document.getElementById("miParrafo1").style.backgroundColor=document.getElementById("color").value;
}

//document.getElementById("saludar").addEventListener("click", saludar, false);


let fruta = ["Manzana", "Pera", "Naranja", "Plátano"];

//document.getElementById("miParrafo1").innerHTML = fruta;
for(let misfrutas in fruta){
    document.getElementById("miParrafo1");
    value=fruta[misfrutas] + ",";
    console.log(value);
}

fruta.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
});
