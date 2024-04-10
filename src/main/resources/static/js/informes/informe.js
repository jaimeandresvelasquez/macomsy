$(document).ready(function () {
    insta();
});

async function insta() {
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

        let cri= "";

        switch (activo.prioridad){
            case "Critico":
                cri = "card text-white bg-danger mb-3";

                break;
            case "Alto":
                cri = "card text-dark bg-warning mb-3";

                break;
            case "Medio":
                cri = "card text-dark bg-info mb-3";

                break;
            case "Bajo":
                cri = "card text-white bg-success mb-3";

                break;

        }

        console.log(cri)

        optionsHtml +=
            '<div class="' + cri +'">'+
                '<div class="card-header">' + activo.prioridad + '</div>' +
                '<div class="card-body">' +
                    '<h5 class="card-title">[CASO: ' + activo.idordentrabajo + ']</h5>' +
                    '<p class="card-text">' + activo.descripcion + '</p>' +
                '</div>'+
            '</div>';


        //'<div className="tarjetas__container" style="margin-top: 100px;">'+
        //'<div className="tarjeta">' +
        //'<div class="titulo">' +
        //'<h3 class="numero-caso">[CASO: ' + activo.idordentrabajo + ']</h3>' +
        //'</div>' +
        //'<div class="contenido">' +
        //'<i class="fa-solid fa-wrench icono" title="Ordenes"></i>' +
        //'<p class="texto">' + activo.descripcion + '</p>' +
        //'<p class="urgencia urgencia-alta">' + activo.prioridad + '</p>' +
        //'</div>' +
        //'</div>'+
        //'</div>'
        //;
    }

    document.getElementById('tarjetaorden').innerHTML = optionsHtml;
}




