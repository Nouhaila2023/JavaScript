
let num1 = parseInt(prompt("Intrega numero 1:)"));
let num2 = parseInt(prompt("Intrega numero 2:)"));
let num3 = parseInt(prompt("Intrega numero 3:)"));
let num4 = parseInt(prompt("Intrega numero 4:)"));
let num5 = parseInt(prompt("Intrega numero 5:)"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
    document.write("❌ Por favor, ingresa solo números válidos.");
} else {
    operaciones(num1, num2, num3, num4, num5);
}

function operaciones(num1,num2,num3,num4,num5){
    
    let suma = num1+num2+num3+num4+num5;
    let media = suma / 5;

    let mayor = num1;
    let menor = num1;

    if(num2>mayor){
        mayor = num2;
    }else if(num3>mayor){
       mayor = num3;
    }else if(num4>mayor){
       mayor = num4;
    }else if(num5>mayor){
       mayor = num5;
    }

    if(num2<menor){
        menor = num2;
    }else if(num3<menor){
        menor = num2;
    }else if(num4<menor){
        menor = num2;
    }else if(num5<menor){
        menor = num2;
    }


    let multiplos = 0;
    if (num1 % 5 === 0) multiplos++;
    if (num2 % 5 === 0) multiplos++;
    if (num3 % 5 === 0) multiplos++;
    if (num4 % 5 === 0) multiplos++;
    if (num5 % 5 === 0) multiplos++;



    document.write("<h2>Resultados</h2>");
    document.write("✅ El número mayor es: " + mayor + "<br>");
    document.write("✅ El número menor es: " + menor + "<br>");
    document.write("📊 La media es: " + media + "<br>");
    document.write("🔢 Cantidad de números múltiplos de 5: " + multiplos + "<br>");


}