import axios from "axios";
import { GET_ACCOUNTS } from "./types";

export const getAccounts = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/compte/all");

  dispatch({
    type: GET_ACCOUNTS,
    payload: res.data
  });
};

export const getAccountsByMotif = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8080/demande/motif/${id}`);
  history.push("/dashboard");
  dispatch();
};
