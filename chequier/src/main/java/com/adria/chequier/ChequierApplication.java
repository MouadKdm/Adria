package com.adria.chequier;

import com.adria.chequier.domain.Abonne;
import com.adria.chequier.domain.Compte;
import com.adria.chequier.repositories.AbonneRepository;
import com.adria.chequier.repositories.CompteRepository;
import com.adria.chequier.repositories.DemandeRepository;
import com.adria.chequier.services.AbonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ChequierApplication implements CommandLineRunner {
    @Autowired
    private AbonneRepository abonneRepository ;
    @Autowired
    private CompteRepository compteRepository ;
    @Autowired
    private DemandeRepository demandeRepository ;
    @Autowired
    private AbonneService abonneService;
    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public static void main(String[] args) {
        SpringApplication.run(ChequierApplication.class, args);
    }
    @Override
    public void run (String... arg0) throws Exception{
//        abonneService.saveOrUpdateUser(new Abonne("kadim","said","1234","admin"));
////        Abonne abonne =abonneRepository.save(new Abonne("Kadim" ,"Mouad" , "mouad123456" ,"Mouad.Kdm" ));
////        Abonne abonne1 =abonneRepository.save(new Abonne("Mandour" ,"Amine" , "aaa123" ,"lghiyab" ));
//////        Compte c1 = compteRepository.save(new Compte(1l,200,200,abonne));
////        Compte c2 = compteRepository.save(new Compte(2l,100,100,abonne1));


    }

}
