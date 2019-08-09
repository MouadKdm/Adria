import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECTS,
  GET_DEMANDE,
  DELETE_DEMANDE,
  FETCH_DEMANDE,
  FETCH_DEMANDE_NUMERO_COMPTE
} from "./types";

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
