$(document).ready(function() {
// on ready
});

async function registrarOrdenes() {

    let datos = {};

    datos.prioridad = document.getElementById('prioridad').value;
    datos.requerido = document.getElementById('requerido').value;
    datos.aprobado = document.getElementById('aprobado').value;
    datos.fecha = document.getElementById('fecha').value;
    datos.equipo = document.getElementById('equipo').value;
    datos.ubicacion = document.getElementById('ubicacion').value;
    datos.descripcion = document.getElementById('descripcion').value;

    const request = await fetch('api/ordenes', {
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