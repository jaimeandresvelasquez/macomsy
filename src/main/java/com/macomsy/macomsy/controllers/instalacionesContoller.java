package com.macomsy.macomsy.controllers;

import com.macomsy.macomsy.dao.InstalacionesDao;
import com.macomsy.macomsy.models.Instalaciones;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class instalacionesContoller {

    @Autowired
    private InstalacionesDao instalacionesDao;
    @RequestMapping(value = "api/instalciones", method = RequestMethod.GET)
    public List<Instalaciones> getInstalaciones(){
        return instalacionesDao.getInstalaciones();
    };

    @RequestMapping(value = "api/instalciones/{idinstalaciones}", method = RequestMethod.DELETE)
    public void eliminar (@PathVariable Long idinstalaciones){
        instalacionesDao.eliminar(idinstalaciones);
    }

    @RequestMapping(value = "api/instalciones", method = RequestMethod.POST)
    public void registrarInstalaciones(@RequestBody Instalaciones instalaciones){
        instalacionesDao.registrar(instalaciones);
    };

}
