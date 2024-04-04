package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Activos;
import com.macomsy.macomsy.models.Instalaciones;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class ActivosDaoImp implements ActivosDao {

    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Activos> getActivos() {
        String query = "FROM Activos ";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long idactivos) {
        Activos activos= entityManager.find(Activos.class, idactivos);
        entityManager.remove(activos);
    }

    @Override
    public void registrar(Activos activos) {
        entityManager.merge(activos);

    }
}
