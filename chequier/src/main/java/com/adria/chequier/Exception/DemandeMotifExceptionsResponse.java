package com.adria.chequier.Exception;

public class DemandeMotifExceptionsResponse {
   private String Motif ;

    public String getMotif() {
        return Motif;
    }

    public void setMotif(String motif) {
        Motif = motif;
    }

    public DemandeMotifExceptionsResponse(String motif) {
        Motif = motif;
    }
}
