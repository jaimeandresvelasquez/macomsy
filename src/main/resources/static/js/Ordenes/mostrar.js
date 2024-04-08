// Call the dataTables jQuery plugin
$(document).ready(function() {
    ordenestrabajo();
    $('#ordenes').DataTable();
});

async function ordenestrabajo(){

    const request = await fetch('api/ordenes', {
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
                                                    '<td>'+instalacion.idordentrabajo+'</td>\n' +
                                                    '<td>'+instalacion.prioridad+'</td>\n' +
                                                    '<td>'+instalacion.requerido+'</td>\n' +
                                                    '<td>'+instalacion.aprobado+'</td>\n' +
                                                    '<td>'+instalacion.fecha+'</td>\n' +
                                                    '<td>'+instalacion.equipo+'</td>\n' +
                                                    '<td>'+instalacion.ubicacion+'</td>\n' +
                                                    '<td>'+instalacion.descripcion+'</td>\n' +
                                                    '<td>\n' +
                                                        '<a href="#" onclick="eliminarInventario('+instalacion.idordentrabajo+')" class="btn btn-danger btn-circle btn-sm">\n' +
                                                        '<i class="fas fa-trash"></i>\n' +
                                                        '</a>\n' +
                                                    '</td>\n' +
                                              '</tr>';

        listadoHtml += instalacionesHtml;
    }



  document.querySelector('#ordenes tbody').outerHTML = listadoHtml;

}

async function eliminarInventario(idordentrabajo) {

    if (!confirm('desea eliminar esta Instalacion')) {
        return;
    } else {
        const request = await fetch('api/ordenes/' + idordentrabajo, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        location.reload()
    }
}
