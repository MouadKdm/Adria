package com.adria.chequier.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class DemandeMotifException extends RuntimeException {
    public DemandeMotifException(String message) {
        super(message);
    }
}
