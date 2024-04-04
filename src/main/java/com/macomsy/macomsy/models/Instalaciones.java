package com.macomsy.macomsy.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "instalaciones")

public class Instalaciones {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "idinstalaciones")
    private Long idinstalaciones;
    @Getter @Setter @Column(name = "nombreinstalaciones")
    private String nombreinstalaciones;
    @Getter @Setter @Column(name = "criticidadinstalaciones")
    private String criticidadinstalaciones;
    @Getter @Setter @Column(name = "familiainstalaciones")
    private String familiainstalaciones;
    @Getter @Setter @Column(name = "direccioninstalaciones")
    private String direccioninstalaciones;
    @Getter @Setter @Column(name = "comentarioinstalaciones")
    private String comentarioinstalaciones;

}
