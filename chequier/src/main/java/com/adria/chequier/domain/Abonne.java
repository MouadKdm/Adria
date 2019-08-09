package com.adria.chequier.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.transaction.Transactional;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Entity
public class Abonne  {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @NotBlank(message = "required")
    private String username ;
    @NotBlank(message = "required")
    private String nom ;
    @NotBlank(message = "required")
    private String prenom ;
    @NotBlank(message = "required")
    private String password ;
    @JsonIgnore
    @OneToMany(mappedBy = "abonne",fetch = FetchType.EAGER)
    private List<Compte> comptes ;

    public Abonne() {
    }

    public Abonne(String nom, String prenom, String password,String username) {
        this.username = username;
        this.nom = nom;
        this.prenom = prenom;
        this.password = password;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<Compte> getComptes() {
        return comptes;
    }

    public void setComptes(List<Compte> comptes) {
        this.comptes = comptes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
