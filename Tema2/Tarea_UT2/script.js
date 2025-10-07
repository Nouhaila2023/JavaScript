function capturarDatos() {
    let nombre = document.getElementById("nombre").value.trim();
    let anio = document.getElementById("anio").value.trim();
    let color = document.getElementById("color").value;

    if (nombre === "" || anio === "" || color === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
    
    let anioActual = new Date().getFullYear();
    let edad = anioActual - parseInt(anio);

    let mensajeResultado = "Hola " + nombre + ", tienes " + edad + 
                           " años y tu color favorito es " + color + ".";

    //mensajeResultado.style.color = color;

    document.getElementById("resultado").innerHTML =
        "<span style='color:" + color + "'>" + mensajeResultado + "</span>";

    console.log(mensajeResultado);

    if (edad >= 18) {
        document.getElementById("mensaje").innerHTML =
            "<span style='color:green;'>Eres mayor de edad</span>";
    } else {
        document.getElementById("mensaje").innerHTML =
            "<span style='color:red;'>Eres menor de edad</span>";
    }
}
