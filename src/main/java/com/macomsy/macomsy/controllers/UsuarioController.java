package com.macomsy.macomsy.controllers;

import com.macomsy.macomsy.dao.UsuarioDao;
import com.macomsy.macomsy.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {
    @Autowired
    private UsuarioDao usuarioDao;
    @RequestMapping(value = "api/usuario/{id}", method = RequestMethod.GET)
    public Usuario getUsuario (@PathVariable long id){
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("jaime");
        usuario.setApellido("velasquez");
        usuario.setEmail("jaime@yahoo");
        usuario.setTelefono("30049");
        return usuario;
    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.GET)
    public List<Usuario> getUsuario(){
        return usuarioDao.getUsuario();
    }


    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario){
        usuarioDao.registar(usuario);
    }



    @RequestMapping(value = "editar")
    public Usuario editar (){
        Usuario usuario = new Usuario();
        usuario.setNombre("jaime");
        usuario.setApellido("velasquez");
        usuario.setEmail("jaime@yahoo");
        usuario.setTelefono("30049");
        return usuario;
    }

    @RequestMapping(value = "api/usuario/{id}", method = RequestMethod.DELETE)
    public void eliminar (@PathVariable Long id){
        usuarioDao.eliminar(id);
    }

    @RequestMapping(value = "usuario24")
    public Usuario buscar (){
        Usuario usuario = new Usuario();
        usuario.setNombre("jaime");
        usuario.setApellido("velasquez");
        usuario.setEmail("jaime@yahoo");
        usuario.setTelefono("30049");
        return usuario;
    }
}
