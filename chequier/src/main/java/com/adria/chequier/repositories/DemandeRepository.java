package com.adria.chequier.repositories;

import com.adria.chequier.domain.Compte;
import com.adria.chequier.domain.Demande;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface DemandeRepository extends CrudRepository<Demande,Long> {
    Demande findByNumero(Long id );
    List<Demande> findByMotif(String motif);
    List<Demande> findByStatut(String statut);
    List<Demande> findAll();
    List<Demande> findByNumeroAndMotifAndStatut(Long numero , String motif , String statut);
    List<Demande> findByNumeroOrMotifOrStatut(Long numero , String motif , String statut);
//    List<Demande> findByDate_creationBetween(Date date_creation , Date date_execution);
    List<Demande> findByCompte(Compte compte);
    List<Demande> findByDateCreationBetween(Date date , Date date1);
}
