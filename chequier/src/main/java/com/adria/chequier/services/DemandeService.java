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

import java.util.ArrayList;
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

    public Demande saveOrUpdateDemande(Demande demande,String username) {
//       try {

//        Compte compte= compteRepository.findById(demande.getCompte().)
//
//        Abonne a= abonneRepository.findById(demande.getCompte().getAbonne().getId()).get();

//            demande.setMotif(demande.getMotif().toUpperCase());
        Abonne abonne = abonneRepository.findByUsername(username);
        demande.setDemandeLeader(abonne.getUsername());
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

    public List<Demande> findAllDemande(String username) {
        List<Compte> comptes = abonneRepository.findByUsername(username).getComptes();
        List<Demande> demandes = new ArrayList<>();
        comptes.forEach((compte)->demandeRepository.findByCompte(compte).forEach(demande -> demandes.add(demande)));
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

    public List<Demande> getDemandeByCompteAndMotif(Long numero_compte, String motif) {
        Compte compte1 = compteRepository.findByNumeroCompte( numero_compte);
        List<Demande> demandes = demandeRepository.findByCompteAndMotif(compte1, motif);
        return demandes;
    }
    public List<Demande> getDemandeByCompteAndMotifAndStatut(Long numero_compte, String motif , String statut) {
        Compte compte1 = compteRepository.findByNumeroCompte( numero_compte);
        List<Demande> demandes = demandeRepository.findByCompteAndMotifAndStatut(compte1, motif,statut);
        return demandes;
    }

//    public List<Demande> getDemandeByNumeroOrMotifOrStatut(Long numero, String motif, String statut) {
//        List<Demande> demandes = demandeRepository.findByNumeroOrMotifOrStatut(numero, motif, statut);
//        return demandes;
//    }

    public List<Demande> getDemandeByDeuxDate(Date date, Date date1) {
        List<Demande> demandes = demandeRepository.findByDateCreationBetween(date, date1);
        return demandes;

    }
    public List<Demande> getDemandeByMotifAndStatut(String motif , String statut){
        List<Demande> demandes = demandeRepository.findByMotifAndStatut(motif,statut);
        return demandes;
    }
    public List<Demande> getDemandeByMotifAndDAteCreation(String motif , Date date , Date date1){
        List<Demande> demandes = demandeRepository.findByMotifAndDateCreationBetween(motif,date,date1);
        return demandes;
    }
    public List<Demande> getDemandeByCompteAndStatut(Long numero_compte , String statut){
        Compte compte1 = compteRepository.findByNumeroCompte(numero_compte);
        List<Demande> demandes = demandeRepository.findByCompteAndStatut(compte1,statut);
        return demandes;
    }
    public List<Demande> getDemandeByStatutAndDateCreation( String statut , Date date , Date date1){
        List<Demande> demandes = demandeRepository.findByStatutAndDateCreationBetween(statut,date , date1);
        return demandes;
    }
    public List<Demande> getDemandeByCompteAndDateCreation(Long numero_compte , Date date , Date date1){
        Compte compte1 = compteRepository.findByNumeroCompte(numero_compte);
        List<Demande> demandes = demandeRepository.findByCompteAndDateCreationBetween(compte1,date,date1);
        return demandes;
    }
    public List<Demande> getDemandeByMotifAndStatutAndDateCreation(String motif , String statut ,Date date , Date date1){
        List<Demande> demandes = demandeRepository.findByMotifAndStatutAndDateCreationBetween(motif,statut,date,date1);
        return demandes;
    }
    public List<Demande> getDemandeByCompteAndMotifAndDateCreation(Long numero_compte,String motif , Date date , Date date1){
        Compte compte1 = compteRepository.findByNumeroCompte(numero_compte);
        List<Demande> demandes = demandeRepository.findByCompteAndMotifAndDateCreationBetween(compte1,motif,date,date1);
        return demandes;
    }
    public List<Demande> getDemandeByCompteAndStatutAndDateCreation(Long numero_compte , String statut , Date date , Date date1){
        Compte compte1 = compteRepository.findByNumeroCompte(numero_compte);
        List<Demande> demandes = demandeRepository.findByCompteAndStatutAndDateCreationBetween(compte1,statut,date,date1);
        return demandes;
    }

    public List<Demande> getDemandeByAllParams(Long numero_compte , String motif , String statut , Date date , Date date1){
        Compte compte1 = compteRepository.findByNumeroCompte(numero_compte);
        List<Demande> demandes = demandeRepository.findByCompteAndMotifAndStatutAndDateCreationBetween(compte1,motif,statut,date,date1);
        return demandes;
    }


}
