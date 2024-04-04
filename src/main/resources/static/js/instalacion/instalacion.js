$(document).ready(function() {
// on ready
});

async function registrarInstalaciones() {

    let datos = {};

    datos.nombreinstalaciones = document.getElementById('nombre').value;
    datos.criticidadinstalaciones = document.getElementById('criticidad').value;
    datos.familiainstalaciones = document.getElementById('familia').value;
    datos.direccioninstalaciones = document.getElementById('direccion').value;
    datos.comentarioinstalaciones = document.getElementById('comentarios').value;


    const request = await fetch('api/instalciones', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    //const usuarios = await request.json();

    if (request.ok) {
        // Mostrar mensaje de éxito
        alert("Usuario registrado exitosamente");
        location.reload()
    } else {
        // Mostrar mensaje de error con la respuesta del servidor
        alert(`Error al registrar usuario: ${response.error}`);
    }
}