window.onload=iniciar;
function iniciar(){
document.getElementById("enviar").addEventListener('click',ValidarTodo,false);
document.getElementById("nombre").addEventListener('blur',mayusculas,false);
document.getElementById("apellidos").addEventListener('blur',mayusculas,false);
}
function comprobarNombre(){
    const nombre=document.getElementById("nombre");
    nombre.className="";
    if(nombre.value==""){
        nombre.focus();
        nombre.className="error";
        alert("el nombre no puede estar vacio");
        return false;
    }else{
        nombre.className="";
    return true;    }
}
function comprobarApellido(){
    const apellidos=document.getElementById("apellidos");
    apellidos.className="";
    if(apellidos.value==""){
        apellidos.focus();
        apellidos.className="error";
        alert("Los apellidos no pueden estar vacio");
        return false;
    }else{
        apellidos.className="";
    return true;    }
}
function edad(){
    const edad=document.getElementById("edad");
    edad.className="";
    if(edad.value=="" ||edad.value<18 || isNaN(edad.value)){
        edad.focus();
        edad.className="error";
        alert("la edad no es correcta");
        return false;
    }else{
        edad.className="";
        return true;
    }
}
function mayusculas(){
    this.value=this.value.toUpperCase();
}
function matricula(){
    const matricula=document.getElementById("matricula");
    const expresion=/^\d{4}\s?[A-Z]{3}$/;
    if(expresion.test(matricula.value)){
        matricula.className=""
        return true;
    }else{
        matricula.focus();
        matricula.className="error";
        alert( "la matricula no es correcta, introduzca una correcta");
        return false;
    }
}
function provincias(){
    const provincias=document.getElementById("provincia");
    provincias.className="";
    if(provincias.selectedIndex==0){
        provincias.focus();
        provincias.className="error";
        alert("debes de seleccionar una provincia");
        return false
    }else{
        provincias.className="";
        return true;
    }
}
function ValidarTodo(eventopordefecto){
    if(comprobarNombre()&& comprobarApellido()&& edad()&& matricula()&& provincias()&& confirm("desea realmente enviar el formulario")){
        return true;
    }else{
        eventopordefecto.preventDefault();
        return false;
    }
}



function ContarIntentosEnvio(){
    let contador = 0;
    if(document.cookie==""){
        document.cookie="contador=0";
    }
    contador=document.cookie.substring(9);
    contador++;
    document.cookie="contador="+contador;
    alert("Has intentado enviar el formulario " + contador + " veces");
    return true; 

}

