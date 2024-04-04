$(document).ready(function() {
    instalaciones();
});

async function instalaciones() {
    const request = await fetch('api/activos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const activos = await request.json();

    console.log(activos);

    // Invertir el orden de los activos
    const activosInvertidos = activos.reverse();

    let optionsHtml = '';

    for (let activo of activosInvertidos) {
        optionsHtml += '<option value="' + activo.nombreactivo + '">' + activo.nombreactivo + '</option>';
    }


    document.getElementById('instalaciones').innerHTML = optionsHtml;
}
