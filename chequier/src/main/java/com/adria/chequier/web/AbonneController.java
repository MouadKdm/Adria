package com.adria.chequier.web;

import com.adria.chequier.services.AbonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/abonne")
@CrossOrigin
public class AbonneController {
    @Autowired
    private AbonneService abonneService ;
}
