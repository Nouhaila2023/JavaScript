window.onload = iniciar;
function iniciar() {
    const elementos = document.querySelectorAll("li");
    elementos.forEach(function (li) {
        li.addEventListener("click", function () {
            li.remove();
        });
    });
}
