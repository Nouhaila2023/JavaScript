window.onload = iniciar;

function iniciar() {
    document.getElementById('formulario')
        .addEventListener('submit', validarTodo);
    document.getElementById('nombre')
        .addEventListener('blur', formatearNombre);
    document.getElementById('apellidos')
        .addEventListener('blur', formatearNombre);
}

function validarNombre() {
    const patron = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    const campo = document.getElementById('nombre');
    if (!patron.test(campo.value)) {
        alert("Nombre incorrecto");
        campo.focus();
        return false;
    }
    return true;
}

function validarApellidos() {
    const patron = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    const campo = document.getElementById('apellidos');
    if (!patron.test(campo.value)) {
        alert("Apellidos incorrectos");
        campo.focus();
        return false;
    }
    return true;
}

function formatearNombre() {
    let texto = this.value.toLowerCase();
    this.value = texto.charAt(0).toUpperCase() + texto.slice(1);
}

function validarPassword() {
    const pass = document.getElementById('pass').value;
    const pass2 = document.getElementById('passver').value;
    const patron = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[;,.\-])[A-Za-z\d;,.\-]{8,}$/;

    if (!patron.test(pass)) {
        alert("Contraseña incorrecta");
        return false;
    }
    if (pass !== pass2) {
        alert("Las contraseñas no coinciden");
        return false;
    }
    return true;
}

function validarFecha() {
    const patron = /^(0[1-9]|[12][0-9]|3[01])[\/-](0[1-9]|1[0-2])[\/-]\d{4}$/;
    const campo = document.getElementById('fecha');
    if (!patron.test(campo.value)) {
        alert("Fecha incorrecta");
        campo.focus();
        return false;
    }
    return true;
}

function validarTodo(e) {
    e.preventDefault();

    if (
        validarNombre() &&
        validarApellidos() &&
        validarPassword() &&
        validarFecha()
    ) {
        alert("Perfil creado correctamente");
    }
}
