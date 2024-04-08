// Call the dataTables jQuery plugin
$(document).ready(function() {
    mantenimiento();
    $('#mantenimientotab').DataTable();
});

async function mantenimiento(){

    const request = await fetch('api/mantenimiento', {
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
                                                    '<td>'+instalacion.idmantenimiento+'</td>\n' +
                                                    '<td>'+instalacion.fecharecibido+'</td>\n' +
                                                    '<td>'+instalacion.fechaentrega+'</td>\n' +
                                                    '<td>'+instalacion.nombreencargado+'</td>\n' +
                                                    '<td>'+instalacion.nombrecliente+'</td>\n' +
                                                    '<td>'+instalacion.equipo+'</td>\n' +
                                                    '<td>'+instalacion.falla+'</td>\n' +
                                                    '<td>\n' +
                                                        '<a href="#" onclick="eliminarInventario('+instalacion.idmantenimiento+')" class="btn btn-danger btn-circle btn-sm">\n' +
                                                        '<i class="fas fa-trash"></i>\n' +
                                                        '</a>\n' +
                                                    '</td>\n' +
                                              '</tr>';

        listadoHtml += instalacionesHtml;
    }



  document.querySelector('#mantenimientotab tbody').outerHTML = listadoHtml;

}

async function eliminarInventario(idmantenimiento) {

    if (!confirm('desea eliminar esta Instalacion')) {
        return;
    } else {
        const request = await fetch('api/mantenimiento/' + idmantenimiento, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        location.reload()
    }
}
