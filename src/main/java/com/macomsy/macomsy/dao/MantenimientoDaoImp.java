package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Instalaciones;
import com.macomsy.macomsy.models.Mantenimiento;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class MantenimientoDaoImp implements MantenimientoDao {

    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Instalaciones> getMantenimiento() {
        String query = "FROM Mantenimiento";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long idmantenimiento) {
        Mantenimiento mantenimiento = entityManager.find(Mantenimiento.class, idmantenimiento);
        entityManager.remove(mantenimiento);

    }

    @Override
    public void registrar(Mantenimiento mantenimiento) {
        entityManager.merge(mantenimiento);

    }
}
