
//Condicional Switch
let miDesayuna = 3;

switch(miDesayuna){
    case 1:
        document.write("Tortia");
        break;
    case 2:
        document.write("Huevos");
        break;
    case 3:
        document.write("Colacao");
        break;
    default:
        document.write("Has elegido otro desayuno:)");            
}


let miDesayuna1 = "Tortia";

switch(miDesayuna1){
    case "Tortia":
        document.write("Tortia");
        break;
    case "Huevos":
        document.write("Huevos");
        break;
    case "Colacao":
        document.write("Colacao");
        break;
    default:
        document.write("Has elegido otro desayuno:)");            
}



//Condecional Ternario


let nombre = "Nouhaila";
let edad = 23;
let resultado = (edad>=18) ? "Es mayor edad" : "Es menor edad";
document.write(resultado);






//Diferencia estre var y let (ambito/bloques)

var curso = "Master en React";

if("hola" == "hola"){
    let corso1 = "El let se usa solo dentro del bloke pero con el var pudemos usarlo como queremos";

}






















