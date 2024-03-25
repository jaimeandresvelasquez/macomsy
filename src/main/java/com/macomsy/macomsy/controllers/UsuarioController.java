package com.macomsy.macomsy.controllers;

import com.macomsy.macomsy.dao.UsuarioDao;
import com.macomsy.macomsy.models.Usuario;
import com.macomsy.macomsy.utils.JwtUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {
    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JwtUtil jwtUtil;
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
    public List<Usuario> getUsuario(@RequestHeader (value = "Authorization") String token){

        String usuarioId = jwtUtil.getKey(token);
        if (usuarioId == null){
            return new ArrayList<>();
        }

        return usuarioDao.getUsuario();
    }


    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario){

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1,1024,1,usuario.getPassword());
        usuario.setPassword(hash);

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
