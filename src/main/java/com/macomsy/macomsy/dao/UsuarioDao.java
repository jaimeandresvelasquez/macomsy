package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Usuario;

import java.util.List;


public interface UsuarioDao {
    List<Usuario> getUsuario();

    void eliminar(Long id);

    void registar(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales (Usuario usuario);
}
