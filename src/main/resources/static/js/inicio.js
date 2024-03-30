document.getElementById("btn_open").addEventListener("click", open_close_menu);
/* declarar variables*/
var side_menu=document.getElementById("menu_side");
var btn_open=document.getElementById("btn_open");
var body=document.getElementById("body");
var title_header=document.getElementById("title_header");

/*evento para mostrar y cocultar menu */

function open_close_menu(){
    body.classList.toggle("body_move")
    side_menu.classList.toggle("menu__side__move")

    if(body.className.match("body_move")){
        title_header.classList.add("show_title") 
    }else{
        title_header.classList.remove("show_title")
    }
}