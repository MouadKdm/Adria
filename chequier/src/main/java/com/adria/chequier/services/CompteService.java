package com.adria.chequier.services;

import com.adria.chequier.domain.Compte;
import com.adria.chequier.repositories.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompteService {
    @Autowired
    private CompteRepository compteRepository ;

    public List<Compte> findAllComptes(){
       return compteRepository.findAll();
    }
    public Compte findCompteByNumeroCompte(Long numero){
         Compte compte =compteRepository.findByNumeroCompte(numero);
         return compte ;
    }
}
