import {
  GET_PROJECTS,
  GET_DEMANDE,
  DELETE_DEMANDE,
  FETCH_DEMANDE,
  FETCH_DEMANDE_NUMERO_COMPTE,
  FETCH_DEMANDE_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_MOTIF,
  FETCH_DEMANDE_STATUT,
  FETCH_DEMANDE_MOTIF_STATUT,
  FETCH_DEMANDE_MOTIF_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_STATUT,
  FETCH_DEMANDE_STATUT_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_STATUT,
  FETCH_DEMANDE_MOTIF_STATUT_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_STATUT_DATE_CREATION,
  FETCH_DEMANDE_ALL_PARAMS
} from "../actions/types";
import { fetchDemandesByNumeroCompteAndMotif } from "../actions/projectActions";

const initialState = {
  projects: [],
  demande: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_DEMANDE:
      return {
        ...state,
        demande: action.payload
      };
    case DELETE_DEMANDE:
      return {
        ...state,
        projects: state.projects.filter(
          demande => demande.numero !== action.payload
        )
      };
    case FETCH_DEMANDE:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_NUMERO_COMPTE:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_DATE_CREATION:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_STATUT:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_MOTIF_STATUT:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_MOTIF_DATE_CREATION:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_NUMERO_COMPTE_STATUT:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_STATUT_DATE_CREATION:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_NUMERO_COMPTE_DATE_CREATION:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_NUMERO_COMPTE_MOTIF:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_STATUT:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_MOTIF_STATUT_DATE_CREATION:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_DATE_CREATION:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_NUMERO_COMPTE_STATUT_DATE_CREATION:
      return {
        ...state,
        projects: action.payload
      };
    case FETCH_DEMANDE_ALL_PARAMS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
