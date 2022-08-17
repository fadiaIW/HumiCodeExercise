import axios from 'axios';
import { BASE_URL, CARD_INFO } from "../apiService/Constants";
export const GET_PEOPLE = 'GET_PEOPLE';

export const getAPI =() =>{
    const url = BASE_URL + CARD_INFO;
    try {
      return async dispatch => {
        const res = await axios.get(`${url}`);
        // console.log('res', res.data);
        if (res.data) {
          dispatch({
            type: GET_PEOPLE,
            payload: res.data.data,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
      
    } catch (error) {
      
    }
  };

