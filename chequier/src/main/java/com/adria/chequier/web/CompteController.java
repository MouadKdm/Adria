package com.adria.chequier.web;

import com.adria.chequier.domain.Compte;
import com.adria.chequier.services.CompteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("compte")
@CrossOrigin
public class CompteController {
    @Autowired
    private CompteService compteService ;
    @PostMapping("/add")
    public ResponseEntity<?> createCompte(@Valid @RequestBody Compte compte , Principal principal){
        Compte compte1 = compteService.saveCompte(compte , principal.getName());
        return new ResponseEntity<Compte>(compte1 , HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllComptes(Principal principal){
        List<Compte> comptes = compteService.findAllComptes(principal.getName());
        return new ResponseEntity<Iterable<Compte>>(comptes , HttpStatus.OK);
    }
}
