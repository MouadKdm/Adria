package com.adria.chequier.web;

import com.adria.chequier.domain.Compte;
import com.adria.chequier.services.CompteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("compte")
@CrossOrigin
public class CompteController {
    @Autowired
    private CompteService compteService ;

    @GetMapping("/all")
    public ResponseEntity<?> getAllComptes(){
        List<Compte> comptes = compteService.findAllComptes();
        return new ResponseEntity<Iterable<Compte>>(comptes , HttpStatus.OK);
    }
}
