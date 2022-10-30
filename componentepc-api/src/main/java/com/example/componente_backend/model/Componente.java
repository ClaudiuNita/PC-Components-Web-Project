package com.example.componente_backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="COMPONENTE")
public class Componente {
    
    @Id
    @GeneratedValue
    private int id;
    private String nume;
    private String producator;
    private int pret;

    public Componente(){}

    public Componente(String nume, String producator, int pret){

        this.nume = nume;
        this.producator = producator;
        this.pret = pret;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getProducator() {
        return producator;
    }

    public void setProducator(String producator) {
        this.producator = producator;
    }

    public int getPret() {
        return pret;
    }

    public void setPret(int pret) {
        this.pret = pret;
    }

    @Override
    public String toString() {
        return "Compondenta [id=" + id + ", nume=" + nume + ", prenume=" + producator + ", medie=" + pret + "]";
    }


}