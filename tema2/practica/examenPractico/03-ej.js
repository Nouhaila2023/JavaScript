
let filas = parseInt(prompt("Intrega numero de filas"));
let columnas = parseInt(prompt("Intrega numero de columnas"));

//Iniciamos tabla
document.write("<table border ='1' >");

for(let i = 0; i < filas; i++){
    // abre fila
    document.write("<tr>");
    for(let j = 0; j < columnas; j++){
        
        let contenido = Math.floor(Math.random() * 10) + 1;;
        let color = "white";
        if(contenido % 3 === 0){
             color = "orange";
        }
        document.write(`<td style="background-color:${color}; text-align:center;">${contenido}</td>`);
    }
     document.write("</tr>")
} 

document.write("</table>");







