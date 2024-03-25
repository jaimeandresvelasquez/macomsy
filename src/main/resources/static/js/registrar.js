$(document).ready(function() {
// on ready
});

async function registrarUsuarios() {

    let datos = {};

    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtRepetirPassword').value;

    if (repetirPassword !== datos.password) {
        alert('la contraseña no es igual');
        return;
    }


    const request = await fetch('api/usuarios', {
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