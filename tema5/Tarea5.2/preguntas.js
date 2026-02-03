window.onload = iniciar;

function iniciar() {
    document.getElementById('formPregunta')
        .addEventListener('submit', mostrar);
}

function validarPregunta() {
    const texto = document.getElementById('assk');
    const patron = /^[A-ZÁÉÍÓÚÑ¿¡][A-Za-zÁÉÍÓÚáéíóúñÑ¿?¡!.,; ]*$/;

    if (!patron.test(texto.value)) {
        alert("Pregunta incorrecta");
        texto.focus();
        return false;
    }

    if (texto.value.includes(".") && !texto.value.match(/\.\s/)) {
        alert("Después del punto debe haber un espacio");
        texto.focus();
        return false;
    }
    return true;
}

function mostrar(e) {
    e.preventDefault();

    if (!validarPregunta()) return;

    const radios = document.getElementsByName('correcta');
    let correcta = -1;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) correcta = i + 1;
    }

    if (correcta === -1) {
        alert("Seleccione la respuesta correcta");
        return;
    }

    alert("Pregunta creada correctamente");
}
