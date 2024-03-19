$(document).ready(function() {
// on ready
});

async function iniciarSesion() {

    let datos = {};

    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    try{
        const request = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });


        const respuesta = await request.json();

        if (request.ok) {
            // Mostrar mensaje de éxito
            alert("Usuario registrado exitosamente");
            location.reload()
        } else {
            // Mostrar mensaje de error con la respuesta del servidor
            alert(`Error al registrar usuario: ${response.error}`);
        }
    } catch (error) {
        // Mensaje error de la API
        console.error(error);
        alert("Ha ocurrido un error inesperado. Intente nuevamente más tarde.");
    }

}