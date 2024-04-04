package com.macomsy.macomsy.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "activos")
public class Activos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "idactivos")
    private Long idActivos;
    @Getter @Setter @Column(name = "idinstalaciones")
    private String idInstalaciones;
    @Getter @Setter @Column(name = "nombreactivo")
    private String nombreactivo;
    @Getter @Setter @Column(name = "estadoactivo")
    private String estadoactivo;
    @Getter @Setter @Column(name = "criticidadactivo")
    private String criticidadactivo;
    @Getter @Setter @Column(name = "fabricanteactivo")
    private String fabricanteactivo;
    @Getter @Setter @Column(name = "modeloactivo")
    private String modeloactivo;
}
