function manejaFormulario(evento) {
    evento.preventDefault();    
    console.log("onsubmit formulario contacto...");
    return false;
}

document.getElementById("formulario-contacto").addEventListener("submit", manejaFormulario);

// JAVA != Javascript 