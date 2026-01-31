let intentos;
window.onload = iniciar;

function iniciar() {
    intentos =document.getElementById("intentos");
   document.getElementById("validar").addEventListener("click", validarTodo);
   document.getElementById("nombre").addEventListener("blur", mayusculas);
}

function intentosEnvio() {
    let contador = 0;
    if (document.cookie == "") {
        document.cookie = "contador=0"
    }
    contador = document.cookie.substring(9);

    contador++;
    document.cookie = "contador=" + contador;
    alert("Intento de Envíos del formulario: " + contador);
    intentos.innerText = "Intento de Envíos del formulario: " + contador;

    return true;
}

function mayusculas() {
    this.value = this.value.toUpperCase();
}
function validarNombre() {
    let nombre = document.getElementById("nombre");
    nombre.className = "";
    if (nombre.value == "") {
        nombre.focus();
        nombre.className = "error";
        alert("El campo nombre no puede estar vacío");
        return false;
    } else {
        nombre.className = "";
        return true;
    }
}

function validarFecha() {
    let fecha = document.getElementById("fecha");
    let exp = /^\d{2}\/\d{2}\/\d{4}$/;
    fecha.className = "";
    if (exp.test(fecha.value)) {
        fecha.className = "";
        return true;
    } else {
        fecha.focus();
        fecha.className = "error";
        alert("Fecha invalida. Debe tener el formato dd/mm/aaaa");
        return false;
    }
}

function validarTelefono() {
    let telefono = document.getElementById("telefono");
    let exp = /^\+34\s?\d{7,13}$/;
     
    telefono.className = "";
    if (exp.test(telefono.value)) {
        telefono.className = "";
        return true;
    } else {
        telefono.focus();
        telefono.className = "error";
        alert("Telefono Incorrecto. Debe comenzar por +34 seguido de 7 a 13 dígitos");
        return false;
    }
}

function validarIBAN() {
    let iban = document.getElementById("iban");
    let exp = /^ES\d{22}$/
    iban.className = "";
    if (exp.test(iban.value)) {
        iban.className = "";
        return true;
    } else {
        iban.focus();
        iban.className = "error";
        alert("IBAN Incorrecto. Debe comenzar por ES seguido de 22 caracteres alfanuméricos");
        return false;
    }
}

function validarContrasena() {
    let contrasena = document.getElementById("contrasenia");
    let confirmar = document.getElementById("confirmar");
    let exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    contrasena.className = "";
    if (exp.test(contrasena.value)) {
        if (contrasena.value === confirmar.value) {
            contrasena.className = "";
            confirmar.className = "";
            return true;
        } else {
            confirmar.focus();
            confirmar.className = "error";
            alert("Las contraseñas no coinciden");
            return false;
        }
    } else {
        contrasena.focus();
        contrasena.className = "error";
        alert("La contraseña debe tener mínimo 8 caracteres, al menos una letra mayúscula, una minúscula y un número.");
        return false;
    }


}

function validarTodo(evento) {
    if (validarNombre() && validarFecha() && validarTelefono() &&  validarIBAN() && validarContrasena()&& intentosEnvio() && confirm("Confirmar enviar el formulario?" )) {
        return true;
    } else {
        evento.preventDefault();
        return false;
    }
}



