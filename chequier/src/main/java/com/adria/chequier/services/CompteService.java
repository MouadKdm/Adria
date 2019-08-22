package com.adria.chequier.services;

import com.adria.chequier.domain.Abonne;
import com.adria.chequier.domain.Compte;
import com.adria.chequier.repositories.AbonneRepository;
import com.adria.chequier.repositories.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompteService {
    @Autowired
    private CompteRepository compteRepository ;
    @Autowired
    private AbonneRepository abonneRepository ;


    public Compte saveCompte(Compte compte , String username){
        Abonne abonne = abonneRepository.findByUsername(username);
        compte.setAbonne(abonne);
        compte.setCompteLeader(abonne.getUsername());
       return compteRepository.save(compte);
    }

    public List<Compte> findAllComptes(String username){
       return compteRepository.findAll();
    }
    public Compte findCompteByNumeroCompte(Long numero){
         Compte compte =compteRepository.findByNumeroCompte(numero);
         return compte ;
    }
}
