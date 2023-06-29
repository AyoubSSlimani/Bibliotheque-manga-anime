import axios from "axios";
export const GET_PAGINATION = "GET_PAGINATION";
export const GET_NB_CARD = "GET_NB_CARD";

const page = 1
export const getPagination = (page) => {
    return (dispatch) => {
  
      return axios.get(`https://api.jikan.moe/v4/anime?page=${page}`).then((res) => {
      console.log(res.data.pagination);
        dispatch({ type: GET_PAGINATION, payload: res.data.pagination});
      }).catch((error) => {
        console.error(error);
        // Gérer les erreurs de récupération des données
      });
    };
  };

  export const getNbCard = (nbCard) => {
    return (dispatch) => {
      dispatch({ type: GET_NB_CARD, payload: nbCard });
    };
  };
  
