$(document).ready(function() {
// on ready
});

async function registrarmantenimiento() {

    let datos = {};

    datos.fecharecibido = document.getElementById('fecharecibido').value;
    datos.fechaentrega = document.getElementById('fechaentrega').value;
    datos.nombreencargado = document.getElementById('nombreencargado').value;
    datos.telefonoencargado = document.getElementById('telefonoencargado').value;
    datos.gradoencargado = document.getElementById('gradoencargado').value;
    datos.firmaencargado = document.getElementById('firmaencargado').value;
    datos.nombrecliente = document.getElementById('nombrecliente').value;
    datos.telefonocliente = document.getElementById('telefonocliente').value;
    datos.gradocliente = document.getElementById('gradocliente').value;
    datos.firmacliente = document.getElementById('firmacliente').value;
    datos.equipo = document.getElementById('equipo').value;
    datos.fabricante = document.getElementById('fabricante').value;
    datos.modelo = document.getElementById('modelo').value;
    datos.falla = document.getElementById('falla').value;
    datos.causa = document.getElementById('causa').value;
    datos.solucion = document.getElementById('solucion').value;

    const request = await fetch('api/mantenimiento', {
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