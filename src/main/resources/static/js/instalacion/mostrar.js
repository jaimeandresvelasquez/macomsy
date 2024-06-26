// Call the dataTables jQuery plugin
$(document).ready(function() {
    instalaciones();
    $('#instalacion').DataTable();
});

async function instalaciones(){

    const request = await fetch('api/instalciones', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const instal = await request.json();

    console.log(instal);

    // Invertir el orden de los usuarios
    const instalacionesinvertidos = instal.reverse();

    let listadoHtml = '';

    for(let instalacion of instalacionesinvertidos){
        let instalacionesHtml = '<tr>\n' +
                                                  '<td>'+instalacion.idinstalaciones+'</td>\n' +
                                                  '<td>'+instalacion.nombreinstalaciones+'</td>\n' +
                                                  '<td>'+instalacion.criticidadinstalaciones+'</td>\n' +
                                                  '<td>'+instalacion.familiainstalaciones+'</td>\n' +
                                                  '<td>'+instalacion.direccioninstalaciones+'</td>\n' +
                                                  '<td>'+instalacion.comentarioinstalaciones+'</td>\n' +
                                                '<td>\n' +
                                                    '<a href="#" onclick="eliminarInventario('+instalacion.idinstalaciones+')" class="btn btn-danger btn-circle btn-sm">\n' +
                                                    '<i class="fas fa-trash"></i>\n' +
                                                    '</a>\n' +
                                                '</td>\n' +
                                              '</tr>';

        listadoHtml += instalacionesHtml;
    }



  document.querySelector('#instalacion tbody').outerHTML = listadoHtml;

}

async function eliminarInventario(idinstalaciones) {

    if (!confirm('desea eliminar esta Instalacion')) {
        return;
    } else {
        const request = await fetch('api/instalciones/' + idinstalaciones, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        location.reload()
    }
}
