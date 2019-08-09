package com.adria.chequier.domain;
import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.*;
import javax.validation.constraints.Size;

import java.util.Date;
@Entity
public  class  Demande {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numero ;
    @Size(min=4 , max = 10 , message = "please use 4 to 10 characters")
    private String motif ;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dateCreation=  new Date();
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date date_execution ;
    private String statut ;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "CODE_COMPTE")
    private Compte compte ;

    public Demande() {
    }

    public Demande(String motif, Date date_execution, String statut, Compte compte) {
        this.motif = motif;
        this.date_execution = date_execution;
        this.statut = statut;
        this.compte = compte;
    }

    public String getMotif() {
        return motif;
    }

    public void setMotif(String motif) {
        this.motif = motif;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date date_creation) {
        this.dateCreation = date_creation;
    }

    public Date getDate_execution() {
        return date_execution;
    }

    public void setDate_execution(Date date_execution) {
        this.date_execution = date_execution;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public Compte getCompte() {
        return compte;
    }

    public void setCompte(Compte compte) {
        this.compte = compte;
    }

    public Long getNumero() {
        return numero;
    }

    public void setNumero(Long numero) {
        this.numero = numero;
    }
}

