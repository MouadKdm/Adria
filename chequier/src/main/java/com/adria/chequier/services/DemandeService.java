package com.adria.chequier.services;

import com.adria.chequier.Exception.DemandeMotifException;
import com.adria.chequier.domain.Abonne;
import com.adria.chequier.domain.Compte;
import com.adria.chequier.domain.Demande;
import com.adria.chequier.repositories.AbonneRepository;
import com.adria.chequier.repositories.CompteRepository;
import com.adria.chequier.repositories.DemandeRepository;
import com.sun.org.apache.bcel.internal.generic.LSTORE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class DemandeService {
    @Autowired
    private DemandeRepository demandeRepository;
    @Autowired
    AbonneRepository abonneRepository;
    @Autowired
    CompteRepository compteRepository;

    public Demande saveOrUpdateDemande(Demande demande) {
//       try {

//        Compte compte= compteRepository.findById(demande.getCompte().)
//
//        Abonne a= abonneRepository.findById(demande.getCompte().getAbonne().getId()).get();

//            demande.setMotif(demande.getMotif().toUpperCase());
        return demandeRepository.save(demande);

//        }catch (Exception e){
//            throw new DemandeMotifException("cheque avec le motif  " +demande.getMotif().toUpperCase()+" est deja existe ");
//        }
    }

    public Demande findDemandeById(Long id) {
        Demande demande = demandeRepository.findByNumero(id);
        return demande;
    }

    public List<Demande> findDemandeByMotif(String motif) {
        if (motif == "") {
            throw new DemandeMotifException("le motif est vide");
        }

        List<Demande> demandes = demandeRepository.findByMotif(motif);
        return demandes;


    }

    public List<Demande> findDemandeByStatut(String statut) {
        List<Demande> demandes = demandeRepository.findByStatut(statut);
        return demandes;
    }

    public List<Demande> findAllDemande() {
        List<Demande> demandes = demandeRepository.findAll();
        return demandes;
    }

    public void deleteDemandeById(Long numero) {
        Demande demande = demandeRepository.findByNumero(numero);
        if (demande == null) {
            throw new DemandeMotifException("Deamnde with id " + numero + "does not exist ");

        }
        demandeRepository.delete(demande);

    }

    public List<Demande> findAllDemandebyNumeroCompte(Long numero) {
        Compte compte1 = compteRepository.findByNumeroCompte(numero);
        List<Demande> demandes = demandeRepository.findByCompte(compte1);
        return demandes;
    }

    public List<Demande> getDemandeByNumeroAndMotifAndStatut(Long numero, String motif, String statut) {
        List<Demande> demandes = demandeRepository.findByNumeroAndMotifAndStatut(numero, motif, statut);
        return demandes;
    }

    public List<Demande> getDemandeByNumeroOrMotifOrStatut(Long numero, String motif, String statut) {
        List<Demande> demandes = demandeRepository.findByNumeroOrMotifOrStatut(numero, motif, statut);
        return demandes;
    }

    public List<Demande> getDemandeByDeuxDate(Date date, Date date1) {
        List<Demande> demandes = demandeRepository.findByDateCreationBetween(date, date1);
        return demandes;

    }
}
