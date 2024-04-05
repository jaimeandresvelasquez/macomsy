package com.macomsy.macomsy.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "ordentrabajo")

public class Ordenes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "idordentrabajo")
    private Long idordentrabajo;
    @Getter @Setter @Column(name = "prioridad")
    private String prioridad;
    @Getter @Setter @Column(name = "requerido")
    private String requerido;
    @Getter @Setter @Column(name = "aprobado")
    private String aprobado;
    @Getter @Setter @Column(name = "fecha")
    private String fecha;
    @Getter @Setter @Column(name = "equipo")
    private String equipo;
    @Getter @Setter @Column(name = "ubicacion")
    private String ubicacion;
    @Getter @Setter @Column(name = "descripcion")
    private String descripcion;
}
