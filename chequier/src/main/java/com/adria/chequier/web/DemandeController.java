package com.adria.chequier.web;

import com.adria.chequier.domain.Compte;
import com.adria.chequier.domain.Demande;
import com.adria.chequier.repositories.DemandeRepository;
import com.adria.chequier.services.CompteService;
import com.adria.chequier.services.DemandeService;
import com.adria.chequier.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import sun.jvm.hotspot.ui.DeadlockDetectionPanel;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/demande")
@CrossOrigin
public class DemandeController {
    @Autowired
    private DemandeService demandeService ;
//    @Autowired
//    private MapValidationErrorService mapValidationErrorService ;
    @Autowired
    private CompteService compteService ;

//    @RequestMapping(value = "/add", produces = { "application/json; charset=UTF-8" }, method = RequestMethod.POST)
//    public ResponseEntity<?> createNewDemande(@RequestParam(value = "numero_cpte") long numero , @RequestParam(value = "motif") String motif ,
//                                              @RequestParam(value = "date_execution" ,required = false) Date date_execution , @RequestParam(value = "statut") String statut)
//    {
//
//
//        Compte compte = compteService.findCompteByNumeroCompte(numero);
//        Demande demande = new Demande(motif,date_execution,statut,compte);
//        Date dateActuel = demande.getDate_creation();
//        Date dateExec = demande.getDate_execution();
//        long diff = dateExec.getTime()-dateActuel.getTime();
//        if(diff>=0) {
//
//            Demande demande1 = demandeService.saveOrUpdateDemande(demande);
//            return new ResponseEntity<Demande>(demande1, HttpStatus.CREATED);
//        }
//        return new ResponseEntity<String>("la date d'execution est inferieure que la date d'aujourd'hui",HttpStatus.BAD_REQUEST);
//    }
    @GetMapping("/id/{numero}")
    public ResponseEntity<?> getDeamndeById(@PathVariable Long numero){
        Demande demande = demandeService.findDemandeById(numero);
        return new ResponseEntity<Demande>(demande,HttpStatus.OK);
    }
    @GetMapping("/numero_compte/{numero}")
    public  ResponseEntity<?> getDemandeByNumeroCompte(@PathVariable Long numero){
    List<Demande> demandes = demandeService.findAllDemandebyNumeroCompte(numero);
    return new ResponseEntity<List<Demande>>(demandes,HttpStatus.OK);
    }
    @GetMapping("/motif/{motif}")
    public ResponseEntity<?> getDemandeByMotif(@PathVariable("motif") String motif){

        List<Demande> demandes = demandeService.findDemandeByMotif(motif);

        return new ResponseEntity<List<Demande>>(demandes ,HttpStatus.OK);
    }
    @GetMapping("/date_creation/{date}/{date1}")
    public ResponseEntity<?> getAllDemandesByDate(@PathVariable Date date , @PathVariable Date date1){
        List<Demande> demandes = demandeService.getDemandeByDeuxDate(date,date1);
        return new ResponseEntity<List<Demande>>(demandes ,HttpStatus.OK);
    }
//    @GetMapping("/statut/{statut}")
//    public ResponseEntity<?> getDemandeByStatut(@PathVariable String statut){
//        List<Demande> demandes = demandeService.findDemandeByStatut(statut);
//        return new ResponseEntity<List<Demande>>(demandes ,HttpStatus.OK);
//    }
    @PostMapping("/add")
    ResponseEntity<?> CreateNewDemande (@Valid @RequestBody Demande demande , Long numero){
        Demande demande1 = demandeService.saveOrUpdateDemande(demande);
        return new ResponseEntity<Demande>(demande1,HttpStatus.CREATED);
    }
    @GetMapping("/and/{numero}/{motif}/{statut}")
    public ResponseEntity<?> getDemandeByNumeroAndMotifAndStatut(@PathVariable Long numero,@PathVariable String motif ,@PathVariable String statut){
        List<Demande> demandes = demandeService.getDemandeByNumeroAndMotifAndStatut(numero,motif,statut);
        return new ResponseEntity<List<Demande>>(demandes ,HttpStatus.OK);
    }
    @GetMapping("/or/{numero}/{motif}/{statut}")
    public ResponseEntity<?> getDemandeByNumeroOrMotifOrStatut(@PathVariable Long numero,@PathVariable String motif ,@PathVariable String statut){
        List<Demande> demandes = demandeService.getDemandeByNumeroOrMotifOrStatut(numero,motif,statut);
        return new ResponseEntity<List<Demande>>(demandes ,HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<?> getAllDemandes(){
        List<Demande> demandes = demandeService.findAllDemande();
        return new ResponseEntity<List<Demande>>(demandes ,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{numero}")
    public ResponseEntity<?> deleteProject(@PathVariable Long numero){
        demandeService.deleteDemandeById(numero);
        return new ResponseEntity<String>("demande with id "+numero+" was deleted with success",HttpStatus.OK);
    }


//    @RequestMapping(value = "/cc", produces = { "application/json; charset=UTF-8" }, method = RequestMethod.GET)
//    public String createNewDemande(){
//       return "hello";
//    }

}
