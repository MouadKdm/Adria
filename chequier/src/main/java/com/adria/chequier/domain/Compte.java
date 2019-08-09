package com.adria.chequier.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
public class Compte  {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @Column(unique = true , updatable = false)
    private Long numeroCompte ;
    private double soldeCompte ;
    private double soldeComptable ;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "CODE_ABONNE")
    private Abonne abonne ;
    @JsonIgnore
    @OneToMany(mappedBy = "compte",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<Demande> demandes ;

    public Compte() {
    }

    public Compte(Long numeroCompte, double soldeCompte, double soldeComptable,Abonne abonne) {
        this.numeroCompte = numeroCompte;
        this.soldeCompte = soldeCompte;
        this.soldeComptable = soldeComptable;
        this.abonne=abonne;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumero_compte() {
        return numeroCompte;
    }

    public void setNumero_compte(Long numero_compte) {
        this.numeroCompte = numero_compte;
    }

    public Abonne getAbonne() {
        return abonne;
    }

    public void setAbonne(Abonne abonne) {
        this.abonne = abonne;
    }

    public Collection<Demande> getDemandes() {
        return demandes;
    }

    public void setDemandes(List<Demande> demandes) {
        this.demandes = demandes;
    }

    public double getSolde_compte() {
        return soldeCompte;
    }

    public void setSolde_compte(double solde_compte) {
        this.soldeCompte = solde_compte;
    }

    public double getSolde_comptable() {
        return soldeComptable;
    }

    public void setSolde_comptable(double solde_comptable) {
        this.soldeComptable = solde_comptable;
    }
}
