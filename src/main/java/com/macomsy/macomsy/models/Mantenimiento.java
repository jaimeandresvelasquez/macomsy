package com.macomsy.macomsy.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "mantenimiento")

public class Mantenimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "idmantenimiento")
    private Long idmantenimiento;
    @Getter @Setter @Column(name = "fecharecibido")
    private String fecharecibido;
    @Getter @Setter @Column(name = "fechaentrega")
    private String fechaentrega;
    @Getter @Setter @Column(name = "nombreencargado")
    private String nombreencargado;
    @Getter @Setter @Column(name = "telefonoencargado")
    private String telefonoencargado;
    @Getter @Setter @Column(name = "gradoencargado")
    private String gradoencargado;
    @Getter @Setter @Column(name = "firmaencargado")
    private String firmaencargado;
    @Getter @Setter @Column(name = "nombrecliente")
    private String nombrecliente;
    @Getter @Setter @Column(name = "telefonocliente")
    private String telefonocliente;
    @Getter @Setter @Column(name = "gradocliente")
    private String gradocliente;
    @Getter @Setter @Column(name = "firmacliente")
    private String firmacliente;
    @Getter @Setter @Column(name = "equipo")
    private String equipo;
    @Getter @Setter @Column(name = "fabricante")
    private String fabricante;
    @Getter @Setter @Column(name = "modelo")
    private String modelo;
    @Getter @Setter @Column(name = "falla")
    private String falla;
    @Getter @Setter @Column(name = "causa")
    private String causa;
    @Getter @Setter @Column(name = "solucion")
    private String solucion;
}
