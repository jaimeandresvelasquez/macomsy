// Call the dataTables jQuery plugin
$(document).ready(function() {
    instalaciones();
    $('#activos').DataTable();
});

async function instalaciones(){

    const request = await fetch('api/activos', {
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
                                                    '<td>'+instalacion.idactivos+'</td>\n' +
                                                    '<td>'+instalacion.nombreactivo+'</td>\n' +
                                                    '<td>'+instalacion.estadoactivo+'</td>\n' +
                                                    '<td>'+instalacion.criticidadactivo+'</td>\n' +
                                                    '<td>'+instalacion.fabricanteactivo+'</td>\n' +
                                                    '<td>'+instalacion.modeloactivo+'</td>\n' +
                                                    '<td>'+instalacion.idinstalaciones+'</td>\n' +
                                                    '<td>\n' +
                                                        '<a href="#" onclick="eliminarActivos('+instalacion.idactivos+')" class="btn btn-danger btn-circle btn-sm">\n' +
                                                        '<i class="fas fa-trash"></i>\n' +
                                                        '</a>\n' +
                                                    '</td>\n' +
                                              '</tr>';

        listadoHtml += instalacionesHtml;
    }



  document.querySelector('#activos tbody').outerHTML = listadoHtml;

}

async function eliminarActivos(idactivos) {

    if (!confirm('desea eliminar esta Instalacion')) {
        return;
    } else {
        const request = await fetch('api/activos/' + idactivos, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        location.reload()
    }
}
