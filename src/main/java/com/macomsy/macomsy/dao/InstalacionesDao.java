package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Instalaciones;

import java.util.List;

public interface InstalacionesDao {

    List<Instalaciones> getInstalaciones();


    void eliminar(Long idinstalaciones);

    void registrar(Instalaciones instalaciones);
}
