package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Instalaciones;
import com.macomsy.macomsy.models.Mantenimiento;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Transactional
public interface MantenimientoDao {
    List<Instalaciones> getMantenimiento();

    void eliminar(Long idmantenimiento);

    void registrar(Mantenimiento mantenimiento);
}
