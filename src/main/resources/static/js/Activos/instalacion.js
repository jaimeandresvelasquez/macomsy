$(document).ready(function() {
// on ready
});

async function registrar() {


    let datos = {};

    datos.nombreactivo = document.getElementById('nombre').value;
    datos.estadoactivo = document.getElementById('estado').value;
    datos.criticidadactivo = document.getElementById('criticidad').value;
    datos.fabricanteactivo = document.getElementById('fabricante').value;
    datos.modeloactivo = document.getElementById('modelo').value;
    datos.idinstalaciones = document.getElementById('instalaciones').value;


    const request = await fetch('api/activos', {
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