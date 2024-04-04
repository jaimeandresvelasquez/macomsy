package com.macomsy.macomsy.dao;

import com.macomsy.macomsy.models.Instalaciones;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional

public class InstalacionesDaoImp implements InstalacionesDao{
    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<Instalaciones> getInstalaciones() {
        String query = "FROM Instalaciones";
        return entityManager.createQuery(query).getResultList();

    }

    @Override
    public void eliminar(Long idinstalaciones) {
        Instalaciones instalaciones = entityManager.find(Instalaciones.class, idinstalaciones);
        entityManager.remove(instalaciones);

    }

    @Override
    public void registrar(Instalaciones instalaciones) {
        entityManager.merge(instalaciones);
    }
}
