document.getElementById("btn_open").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var title_header = document.getElementById("title_header");

function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side__move");

    if (body.classList.contains("body_move")) {
        title_header.classList.add("show_title");
    } else {
        title_header.classList.remove("show_title");
    }
}

document.querySelector('.profile-icon').addEventListener('click', function() {
    var profileOptions = document.querySelector('.profile-options');
    profileOptions.style.display = (profileOptions.style.display === 'block') ? 'none' : 'block';
});

document.querySelector('.settings').addEventListener('click', function() {
    alert('Opción de configuración seleccionada');
});

document.addEventListener("DOMContentLoaded", function() {
    var cerrarSesionLink = document.getElementById('logout');
    
    cerrarSesionLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'login.html';
    });
});
function mostrarImagen() {
    var archivoSeleccionado = document.getElementById('imagen').files[0];
    var visorImagen = document.querySelector('.icono-casa');

    if (archivoSeleccionado) {
        var reader = new FileReader();
        reader.onload = function(e) {
            visorImagen.innerHTML = '<img class="imagen-cubierta" src="' + e.target.result + '" />';
        };
        reader.readAsDataURL(archivoSeleccionado);
    }
}

document.getElementById('imagen').addEventListener('change', mostrarImagen);
