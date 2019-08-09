import {
  GET_PROJECTS,
  GET_DEMANDE,
  DELETE_DEMANDE,
  FETCH_DEMANDE,
  FETCH_DEMANDE_NUMERO_COMPTE
} from "../actions/types";

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
    default:
      return state;
  }
}
