window.onload = iniciar;

function iniciar() {
    document.getElementById('admin').onclick = irAdmin;
    document.getElementById('preguntas').onclick = irPreguntas;
    contarCookies();
}

function contarCookies() {
    let cont = 0;

    if (document.cookie.indexOf("cont=") === -1) {
        cont = 1;
    } else {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith("cont=")) {
                cont = parseInt(cookie.substring(5)) + 1;
                break;
            }
        }
    }

    let f = new Date();
    f.setTime(f.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = "cont=" + cont + "; expires=" + f.toUTCString() + "; path=/";

    document.getElementById('numVisitas').textContent = cont;
}

function irAdmin() {
    window.location.href = "admin.html";
}

function irPreguntas() {
    window.location.href = "preguntas.html";
}
