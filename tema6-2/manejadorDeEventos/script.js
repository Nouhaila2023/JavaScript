document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("div").addEventListener("mouseover", manejador);
    document.querySelector("div").addEventListener("mouseout", manejador);
    document.querySelector("div").addEventListener("click", manejador);

    document.querySelector("ul").addEventListener("click", manejador);
    document.querySelector("ul").addEventListener("mouseover", manejador);

});

function manejador(e) {
    if (e.target.closest("p")) {
        switch (e.type) {
            case "mouseover":
                e.target.classList.add("cambiar");
                break;

            case "mouseout":
                e.target.classList.remove("cambiar");
                break;

            case "click":
                let texto = prompt("Dame un texto del párrafo");
                if (texto) {
                    e.target.textContent = texto;
                }
                break;
        }
    }

    if (e.target.closest("li")) {
        switch (e.type) {
            case "mouseover":
                e.target.closest("li").remove();
                break;

            case "click":
                let li = document.createElement("li");
                let texto = document.createTextNode(
                    prompt("Dame un texto del párrafo")
                );
                li.appendChild(texto);
                e.target.closest("li").appendChild(li);
                break;
        }
    }
}
