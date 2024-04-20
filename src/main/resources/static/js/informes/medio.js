$(document).ready(function () {
    instaMed();
});

async function instaMed() {
    const request = await fetch('api/ordenes', {
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

        if (activo.prioridad == "Medio"){
            optionsHtml +=
            '<div class="card text-dark bg-info mb-3">'+
                '<div class="card-header">' + activo.equipo + '</div>' +
                '<div class="card-body">' +
                    '<h5 class="card-title">[CASO: ' + activo.idordentrabajo + ']</h5>' +
                    '<h5 class="card-title">Usuario: ' + activo.requerido + '</h5>' +
                    '<p class="card-text">' + activo.descripcion + '</p>' +
                    '<p class="card-text">' + activo.fecha + '</p>' +
                '</div>'+
            '</div>';
        }

    }

    document.getElementById('tarjetaordenmed').innerHTML = optionsHtml;
}