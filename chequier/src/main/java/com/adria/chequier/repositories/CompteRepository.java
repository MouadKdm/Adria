package com.adria.chequier.repositories;

import com.adria.chequier.domain.Abonne;
import com.adria.chequier.domain.Compte;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@RepositoryRestResource

public interface CompteRepository extends CrudRepository<Compte,Long> {
    @Override
    List<Compte> findAll();
    List<Compte> getAllByAbonne(Abonne abonne);
    Compte findByNumeroCompte(Long numero);
}
