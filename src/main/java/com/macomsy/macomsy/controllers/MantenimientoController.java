package com.macomsy.macomsy.controllers;

import com.macomsy.macomsy.dao.MantenimientoDao;
import com.macomsy.macomsy.models.Instalaciones;
import com.macomsy.macomsy.models.Mantenimiento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MantenimientoController {

    @Autowired
    private MantenimientoDao mantenimientoDao;

    @RequestMapping(value = "api/mantenimiento", method = RequestMethod.GET)
    public List<Instalaciones> getMantenimiento(){
        return mantenimientoDao.getMantenimiento();
    };

    @RequestMapping(value = "api/mantenimiento/{idmantenimiento}", method = RequestMethod.DELETE)
    public void eliminar (@PathVariable Long idmantenimiento){mantenimientoDao.eliminar(idmantenimiento);}

    @RequestMapping(value = "api/mantenimiento", method = RequestMethod.POST)
    public void registrarMantenimiento(@RequestBody Mantenimiento mantenimiento) {
        mantenimientoDao.registrar(mantenimiento);
    }
}
