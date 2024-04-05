package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Instalaciones;
import com.macomsy.macomsy.models.Ordenes;

import java.util.List;

public interface OrdenesDao {
    List<Instalaciones> getOrdenes();

    void eliminar(Long idordentrabajo);

    void registrar(Ordenes ordenes);
}
