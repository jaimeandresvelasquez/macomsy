package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Instalaciones;
import com.macomsy.macomsy.models.Mantenimiento;
import com.macomsy.macomsy.models.Ordenes;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class OdenesDaoImp implements OrdenesDao {

    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Instalaciones> getOrdenes() {
        String query = "FROM Ordenes";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long idordentrabajo) {
        Ordenes ordenes = entityManager.find(Ordenes.class, idordentrabajo);
        entityManager.remove(ordenes);

    }

    @Override
    public void registrar(Ordenes ordenes) {
        entityManager.merge(ordenes);

    }
}
