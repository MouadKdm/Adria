package com.adria.chequier.repositories;

import com.adria.chequier.domain.Abonne;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbonneRepository extends CrudRepository<Abonne,Long> {
    Abonne findByUsername(String username);
    Abonne getById(Long id);
}
