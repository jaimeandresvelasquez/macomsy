package com.macomsy.macomsy.controllers;

import com.macomsy.macomsy.dao.ActivosDao;
import com.macomsy.macomsy.dao.InstalacionesDao;
import com.macomsy.macomsy.models.Activos;
import com.macomsy.macomsy.models.Instalaciones;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ActivosController {

    @Autowired
    private ActivosDao activosDao;
    @RequestMapping(value = "api/activos", method = RequestMethod.GET)
    public List<Activos> getActivos(){
        return activosDao.getActivos();
    };

    @RequestMapping(value = "api/activos/{idactivos}", method = RequestMethod.DELETE)
    public void eliminar (@PathVariable Long idactivos){
        activosDao.eliminar(idactivos);
    }

    @RequestMapping(value = "api/activos", method = RequestMethod.POST)
    public void registrarActivos(@RequestBody Activos activos){
        activosDao.registrar(activos);
    };


}
