function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('main section');

    secciones.forEach(sec => sec.classList.remove('active'));

    const active = document.getElementById(id);
    if (active) {
        active.classList.add('active');
    }
}

function enviarformulario(event) {
    event.preventDefault();

    const nombre = document.getElementById('Nombre').value;

    document.getElementById('mensajeEnviado').innerText =
        "Gracias " + nombre + " tu mensaje se ha enviado";
}
