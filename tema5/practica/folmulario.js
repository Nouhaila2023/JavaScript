
window.onload=iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener('clik', validarTodo, false);
    document.getElementById("nombre").addEventListener('blur', mayuscola, false);
    document.getElementById("apellidos").addEventListener('blur', mayuscola, false);
    
}


function comprobarNombre(){
    const nombre = document.getElementById("nombre");

    nombre.className="";
    if(nombre.value==""){
        nombre.focus();
        nombre.className="error";
        alert("El apellido no pueden estar vacio");
        return false;
    }else{
        nombre.className="";
        return true;
    }
   
}

function comprobarApellido(){
    const apellidos = document.getElementById("apellidos");
    apellidos.className="";
    if(apellidos.value==""){
        apellidos.focus();
        apellidos.className="error";
        alert("El apellido no pueden estar vacio");
        return false;
    }else{
        apellidos.className="";
        return true;
    }
}

function edad(){
    const edad=document.getElementById("edad");
    edad.className="";
    if(edad.value=="" || edad.value<18 || isNaN(edad.value)){
        edad.focus();
        edad.className="error";
        alert("La edad no es corecta");
        return false;
    }else{
        edad.className="";
        return true;
    }
}

function mayuscola(){
    this.value=this.value.toUpperCase();
}

function matricula(){
    const matricula=document.getElementById("matricula");
    const expresion=/^\d{4}\s?[A-Z]{3}$/;

    if(expresion.test(matricula.value)){
        matricula.className="";
        return true;
    }else{
        matricula.focus();
        alert("La matricula incorecta.");
        matricula.className="error";
        return false;
    }
   
}

function provincia(){
    const provincia=document.getElementById("provincia");
    provincia.className="";
    if(provincia.selececteIndex==0){
        provincia.focus();
        provincia.className="error";
        alert("Selecsiona una provencia");
        return false;
    }else{
        provincia.className="";
        return true;
    }
}

function validarTodo(eventopordefecto){
    if(comprobarNombre() && comprobarApellido() && edad() && matricula() && provincia() && confirm("desea realminte enviar el formolario.")){
        return true;
    }else{
        eventopordefecto.preventDefault();
        return false;
    }

}











