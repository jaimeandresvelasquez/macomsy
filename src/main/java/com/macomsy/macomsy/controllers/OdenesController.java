package com.macomsy.macomsy.controllers;

import com.macomsy.macomsy.dao.OrdenesDao;
import com.macomsy.macomsy.models.Instalaciones;
import com.macomsy.macomsy.models.Mantenimiento;
import com.macomsy.macomsy.models.Ordenes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OdenesController {

    @Autowired
    private OrdenesDao ordenesDao;

    @RequestMapping(value = "api/ordenes", method = RequestMethod.GET)
    public List<Instalaciones> getOrdenes(){
        return ordenesDao.getOrdenes();
    };

    @RequestMapping(value = "api/ordenes/{idordentrabajo}", method = RequestMethod.DELETE)
    public void eliminar (@PathVariable Long idordentrabajo){ordenesDao.eliminar(idordentrabajo);}

    @RequestMapping(value = "api/ordenes", method = RequestMethod.POST)
    public void registrarOrdenes(@RequestBody Ordenes ordenes) {
        ordenesDao.registrar(ordenes);
    }
}
