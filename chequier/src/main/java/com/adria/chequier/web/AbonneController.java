package com.adria.chequier.web;

import com.adria.chequier.domain.Abonne;

import com.adria.chequier.payload.JWTLoginSucessReponse;
import com.adria.chequier.payload.LoginRequest;
import com.adria.chequier.security.JwtTokenProvider;
import com.adria.chequier.security.SecurityConstants;
import com.adria.chequier.services.AbonneService;
import com.adria.chequier.services.MapValidationErrorService;
import com.adria.chequier.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/abonne")
@CrossOrigin(origins = "http://localhost:3000")
public class AbonneController {
    @Autowired
    private AbonneService abonneService ;
    @Autowired
    private MapValidationErrorService mapValidationErrorService ;
    @Autowired
    private UserValidator userValidator;
    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = SecurityConstants.TOKEN_PREFIX +  tokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody Abonne user , BindingResult result ){
        userValidator.validate(user,result);
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null) return errorMap ;
        Abonne user1 = abonneService.saveOrUpdateUser(user);
        return new ResponseEntity<Abonne>(user1, HttpStatus.CREATED);
    }


}
