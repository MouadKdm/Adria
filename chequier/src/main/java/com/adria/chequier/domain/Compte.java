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
    private String compteLeader ;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "CODE_ABONNE")
    private Abonne abonne ;
    @JsonIgnore
    @OneToMany(mappedBy = "compte",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<Demande> demandes ;

    public Compte() {
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumeroCompte() {
        return numeroCompte;
    }

    public void setNumeroCompte(Long numeroCompte) {
        this.numeroCompte = numeroCompte;
    }

    public double getSoldeCompte() {
        return soldeCompte;
    }

    public void setSoldeCompte(double soldeCompte) {
        this.soldeCompte = soldeCompte;
    }

    public double getSoldeComptable() {
        return soldeComptable;
    }

    public void setSoldeComptable(double soldeComptable) {
        this.soldeComptable = soldeComptable;
    }

    public String getCompteLeader() {
        return compteLeader;
    }

    public void setCompteLeader(String compteLeader) {
        this.compteLeader = compteLeader;
    }

    public Abonne getAbonne() {
        return abonne;
    }

    public void setAbonne(Abonne abonne) {
        this.abonne = abonne;
    }

    public List<Demande> getDemandes() {
        return demandes;
    }

    public void setDemandes(List<Demande> demandes) {
        this.demandes = demandes;
    }
}
