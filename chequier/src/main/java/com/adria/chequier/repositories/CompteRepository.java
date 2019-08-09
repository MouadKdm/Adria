package com.adria.chequier.repositories;

import com.adria.chequier.domain.Compte;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CompteRepository extends CrudRepository<Compte,Long> {
    @Override
    List<Compte> findAll();
    Compte findByNumeroCompte(Long numero);
}
