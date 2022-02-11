function manejaFormulario(evento) {
    //evento.preventDefault();    
    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    // .... 
    // procesarFormulario(nombre, apellido);
    console.log("onsubmit formulario contacto...");
    
    //return false;
}

//document.getElementById("formulario-contacto").addEventListener("submit", manejaFormulario);


document.getElementById("boton").addEventListener("click", manejaFormulario);

