import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECTS,
  GET_DEMANDE,
  DELETE_DEMANDE,
  DETAILS_DEMANDE,
  FETCH_DEMANDE,
  FETCH_DEMANDE_NUMERO_COMPTE,
  FETCH_DEMANDE_DATE_CREATION,
  FETCH_DEMANDE_MOTIF_STATUT,
  FETCH_DEMANDE_MOTIF_DATE_CREATION,
  FETCH_DEMANDE_STATUT_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_STATUT,
  FETCH_DEMANDE_MOTIF_STATUT_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_DATE_CREATION,
  FETCH_DEMANDE_NUMERO_COMPTE_STATUT_DATE_CREATION,
  FETCH_DEMANDE_ALL_PARAMS,
  FETCH_DEMANDE_NUMERO_COMPTE_MOTIF,
  FETCH_DEMANDE_STATUT
} from "./types";
import { async } from "q";

export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8080/demande/add", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8080/demande/all");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (error) {}
};

export const getDemandeByMotif = (numero, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8080/demande/id/${numero}`);

  dispatch({
    type: GET_DEMANDE,
    payload: res.data
  });
};

export const deleteDemande = numero => async dispatch => {
  await axios.delete(`http://localhost:8080/demande/delete/${numero}`);

  dispatch({
    type: DELETE_DEMANDE,
    payload: numero
  });
};

export const fetchDemandeByMotif = motif => async dispatch => {
  const res = await axios.get(`http://localhost:8080/demande/motif/${motif}`);
  dispatch({
    type: FETCH_DEMANDE,
    payload: res.data
  });
};
export const fetchDemandeByNumeroCompte = numero => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/numero_compte/${numero}`
  );
  dispatch({
    type: FETCH_DEMANDE_NUMERO_COMPTE,
    payload: res.data
  });
};
export const fetchDemandesByStatut = statut => async dispatch => {
  const res = await axios.get(`http://localhost:8080/demande/statut/${statut}`);
  dispatch({
    type: FETCH_DEMANDE_STATUT,
    payload: res.data
  });
};
export const fetchDemandesByDateCreation = (date, date1) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/dateCreation/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_DATE_CREATION,
    payload: res.data
  });
};
export const fetchDemandesByNumeroCompteAndMotif = (
  numero_compte,
  motif
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/compte/motif/${numero_compte}/${motif}`
  );
  dispatch({
    type: FETCH_DEMANDE_NUMERO_COMPTE_MOTIF,
    payload: res.data
  });
};
// vhkjdvhkgf--------------------------
export const fetchDemandesByMotifAndStatut = (
  motif,
  statut
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/motif/statut/${motif}/${statut}`
  );
  dispatch({
    type: FETCH_DEMANDE_MOTIF_STATUT,
    payload: res.data
  });
};

export const fetchDemandesByMotifAndDateCreation = (
  motif,
  date,
  date1
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/motif/dateCreation/${motif}/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_MOTIF_DATE_CREATION,
    payload: res.data
  });
};

export const fetchDemandesByCompteAndStatut = (
  numero_compte,
  statut
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/compte/statut/${numero_compte}/${statut}`
  );
  dispatch({
    type: FETCH_DEMANDE_MOTIF_DATE_CREATION,
    payload: res.data
  });
};

export const fetchDemandesByStatutAndDateCreation = (
  statut,
  date,
  date1
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/statut/dateCreation/${statut}/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_STATUT_DATE_CREATION,
    payload: res.data
  });
};

export const fetchDemandesByCompteAndDateCreation = (
  numero_compte,
  date,
  date1
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/compte/dateCreation/${numero_compte}/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_NUMERO_COMPTE_DATE_CREATION,
    payload: res.data
  });
};

// three params

export const fetchDemandesByCompteAndMotifAndStatut = (
  numero_compte,
  motif,
  statut
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/compte/motif/statut/${numero_compte}/${motif}/${statut}`
  );
  dispatch({
    type: FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_STATUT,
    payload: res.data
  });
};

export const fetchDemandesByMotifAndStatutAndDateCreation = (
  motif,
  statut,
  date,
  date1
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/motif/statut/dateCreation/${motif}/${statut}/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_MOTIF_STATUT_DATE_CREATION,
    payload: res.data
  });
};

export const fetchDemandesByCompteMotifAndDateCreation = (
  numero_compte,
  motif,
  date,
  date1
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/compte/motif/dateCreation/${numero_compte}/${motif}/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_NUMERO_COMPTE_MOTIF_DATE_CREATION,
    payload: res.data
  });
};

export const fetchDemandesByCompteStatutAndDateCreation = (
  numero_compte,
  statut,
  date,
  date1
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/compte/statut/dateCreation/${numero_compte}/${statut}/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_NUMERO_COMPTE_STATUT_DATE_CREATION,
    payload: res.data
  });
};

export const fetchDemandesByAllParams = (
  numero_compte,
  motif,
  statut,
  date,
  date1
) => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/demande/allParams/${numero_compte}/${motif}/${statut}/${date}/${date1}`
  );
  dispatch({
    type: FETCH_DEMANDE_ALL_PARAMS,
    payload: res.data
  });
};
