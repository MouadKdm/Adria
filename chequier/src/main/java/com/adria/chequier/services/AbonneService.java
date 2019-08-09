package com.adria.chequier.services;

import com.adria.chequier.domain.Demande;
import com.adria.chequier.repositories.AbonneRepository;
import com.adria.chequier.repositories.CompteRepository;
import com.adria.chequier.repositories.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class AbonneService {
    @Autowired
    private AbonneRepository abonneRepository;
    @Autowired
    private CompteRepository compteRepository ;
    @Autowired
    private DemandeRepository demandeRepository ;


    public Page<Demande> listDemande(Long numero_compte, int page , int size){
return null;
    }

}
