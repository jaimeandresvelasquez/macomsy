// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios() {


  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });
  const usuarios = await request.json();

  // Invertir el orden de los usuarios
  const usuariosInvertidos = usuarios.reverse();

  let listadoHtml = '';

  for(let usuario of usuariosInvertidos){

    let usuarioHtml = '<tr>\n' +
                                                    '<td>'+usuario.id+'</td>\n' +
                                                    '<td>'+usuario.nombre+' '+usuario.apellido+'</td>\n' +
                                                    '<td>'+usuario.email+'</td>\n' +
                                                    '<td>'+usuario.telefono+'</td>\n' +
                                                    '<td>\n' +
                                                        '<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm">\n' +
                                                        '<i class="fas fa-trash"></i>\n' +
                                                        '</a>\n' +
                                                    '</td>\n' +
                                               '</tr>';

    listadoHtml += usuarioHtml;
  }


  console.log(usuarios);
  document.querySelector('#usuarios tbody').outerHTML = listadoHtml;
}

function getHeaders(id){
  return{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization' : localStorage.token
  }
}

async function eliminarUsuario(id){

  if (!confirm('desea eliminar este ususario')){
    return;
  }else{
    const request = await fetch('api/usuario/' + id , {
      method: 'DELETE',
      headers: getHeaders()
    });

    location.reload()
  }


}
