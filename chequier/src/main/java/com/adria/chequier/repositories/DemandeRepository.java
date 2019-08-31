package com.adria.chequier.repositories;

import com.adria.chequier.domain.Abonne;
import com.adria.chequier.domain.Compte;
import com.adria.chequier.domain.Demande;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
@Repository
@RepositoryRestResource

public interface DemandeRepository extends CrudRepository<Demande,Long> {
    Demande findByNumero(Long id );
//    List<Demande> findAllByDemandeLeader(Abonne abonne);

    //Find by one param
    List<Demande> findByMotif(String motif);
    List<Demande> findByStatut(String statut);
    List<Demande> findByCompte(Compte compte);
    List<Demande> findByDateCreationBetween(Date date , Date date1);

    //find by two params
    List<Demande> findByCompteAndMotif(Compte compte , String motif);
    List<Demande> findByMotifAndStatut(String motif , String statut);
    List<Demande> findByMotifAndDateCreationBetween(String motif , Date date , Date date1);
    List<Demande> findByCompteAndStatut(Compte compte , String statut);
    List<Demande> findByStatutAndDateCreationBetween(String statut , Date date , Date date1);
    List<Demande> findByCompteAndDateCreationBetween(Compte compte , Date date , Date date1);



    //find by three params
//    List<Demande> findByNumeroOrMotifOrStatut(Long numero , String motif , String statut);
    List<Demande> findByCompteAndMotifAndStatut(Compte compte , String motif , String statut);
    List<Demande> findByMotifAndStatutAndDateCreationBetween(String motif , String statut , Date date , Date date1);
    List<Demande> findByCompteAndMotifAndDateCreationBetween(Compte compte , String motif , Date date , Date date1);
    List<Demande> findByCompteAndStatutAndDateCreationBetween(Compte compte , String statut , Date date , Date date1);


    //find by all params
    List<Demande> findByCompteAndMotifAndStatutAndDateCreationBetween(Compte compte , String motif , String statut, Date date , Date date1);


}
