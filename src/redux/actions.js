import axios from "axios";
import { BASE_URL, CARD_INFO, SEARCH_ENDPOINT } from "../apiService/Constants";

export const GET_PEOPLE = "GET_PEOPLE";
export const SEARCH_PEOPLE = "SEARCH_PEOPLE";
export const ERROR = "ERROR";

export const getAPI = () => {
  const URL = BASE_URL + CARD_INFO;
  try {
    return async (dispatch) => {
      const res = await axios.get(`${URL}`);
      if (res.data) {
        dispatch({
          type: GET_PEOPLE,
          payload: res.data.data,
        });
      } else {
        console.log("error");
      }
    };
  } catch (error) {
    return async (dispatch) => {
      dispatch({
        type: ERROR,
        payload: error.data,
      });
    };
  }
};

export const searchPeople = (name) => {
  const URL = SEARCH_ENDPOINT + name;
  try {
    return async (dispatch) => {
      const res = await axios.get(`${URL}`);
      if (res.data) {
        dispatch({
          type: SEARCH_PEOPLE,
          payload: res.data.data,
        });
      } else {
        console.log("Unable to fetch");
      }
    };
  }  catch (error) {
    return async (dispatch) => {
      dispatch({
        type: ERROR,
        payload: error.data,
      });
    };
  }
};
