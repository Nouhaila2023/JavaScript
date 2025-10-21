//Una funcion llamada operaciones 

//resiva 5 numeros

function operaciones(num1,num2,num3,num4,num5){
    //la suma de numeros
    let suma = num1+num2+num3+num4+num5;

    //la media 
    
    let media = suma / 5;

    //El mayor numero
    let mayor = num1;
    if(num2>mayor)
        mayor = num2;
    if(num3>mayor)
        mayor = num3;
    if(num4>mayor)
        mayor = num4;
    if(num5>mayor)
        mayor = num5;

    //EL menor numero
   let menor = num1;
    if(num2 < menor) 
        menor = num2;
    if(num3 < menor) 
        menor = num3;
    if(num4 < menor) 
        menor = num4;
    if(num5 < menor) 
        menor = num5;

    //La multiplicasion

    let multi = num1*num2*num3*num4*num5;

    return {suma, media,mayor,menor,multi};

}

function mostrarResultado(){

    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let n3 = parseFloat(document.getElementById("numero3").value);
    let n4 = parseFloat(document.getElementById("numero4").value);
    let n5 = parseFloat(document.getElementById("numero5").value);

    let r = operaciones(n1,n2,n3,n4,n5);

    document.getElementById("resultado").innerHTML = `
        <table border="1">
            <tr><th>Operación</th><th>Resultado</th></tr>
            <tr><td>Suma</td><td>${r.suma}</td></tr>
            <tr><td>Media</td><td>${r.media}</td></tr>
            <tr><td>Mayor</td><td>${r.mayor}</td></tr>
            <tr><td>Menor</td><td>${r.menor}</td></tr>
            <tr><td>Multiplicación</td><td>${r.multi}</td></tr>
        </table>
    `;


}