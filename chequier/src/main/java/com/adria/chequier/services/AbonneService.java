package com.adria.chequier.services;

import com.adria.chequier.Exception.UsernameAlreadyExistsException;
import com.adria.chequier.domain.Abonne;
import com.adria.chequier.domain.Demande;
import com.adria.chequier.repositories.AbonneRepository;
import com.adria.chequier.repositories.CompteRepository;
import com.adria.chequier.repositories.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AbonneService {
    @Autowired
    private AbonneRepository abonneRepository;
    @Autowired
    private CompteRepository compteRepository ;
    @Autowired
    private DemandeRepository demandeRepository ;


    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder ;

    public Abonne saveOrUpdateUser(Abonne abonne ){
        try {
            abonne.setPassword(bCryptPasswordEncoder.encode(abonne.getPassword()));
            abonne.setUsername((abonne.getUsername()));
            abonne.setConfirmPassword("");
            return abonneRepository.save(abonne);
        }catch(Exception e){
            throw new UsernameAlreadyExistsException("username"+abonne.getUsername()+"already exist");
        }

    }

}
