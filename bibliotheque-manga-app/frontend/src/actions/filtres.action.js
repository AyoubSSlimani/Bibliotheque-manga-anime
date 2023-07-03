import axios from "axios";
import { filterCards } from "../components/Utils";

export const TOGGLE_CHECKBOXES = "TOGGLE_CHECKBOXES";
export const TOGGLE_TERMINER = "TOGGLE_TERMINER";
export const TOGGLE_DECOCHER_TOUT = "TOGGLE_DECOCHER_TOUT";
export const GET_SEARCH_CARDS = "GET_SEARCH_CARDS";
export const GET_CHECKBOXES_NAME = "GET_CHECKBOXES_NAME";
export const FILTER_ALL_CARDS = "FILTER_ALL_CARDS";

export const getCheckboxesName = () => {
  return async (dispatch) => {
    try {
      const timestamp = parseInt(Date.now() / 1000);
      const response = await axios.get(`https://api.jikan.moe/v4/genres/manga?&q=&timestamp=${timestamp}`);
      dispatch({ type: GET_CHECKBOXES_NAME, payload: response.data.data });
      return response.data.data;
    } catch (error) {
      console.error(error);
      // Gérer les erreurs de récupération des données
      throw error;
    }
  };
};


export const toggleCheckboxes = (checkboxId) => async (dispatch, getState) => {
  dispatch({ type: TOGGLE_CHECKBOXES, payload: checkboxId });

  const updatedCheckboxes = getState().carteReducer.checkboxes; // Obtenez les cases à cocher mises à jour
  try {
    const filteredCards = await filterCards(updatedCheckboxes);

    dispatch({ type: FILTER_ALL_CARDS, payload: filteredCards });
  } catch (error) {
    console.error('Erreur lors de la filtration des cartes :', error);
  }
};



export const getCardsBySearch = (search) => {
  return (dispatch) => {
    if (search.length >= 3) {
      return axios.get(`https://api.jikan.moe/v4/anime?q=${search}&sfw`).then((res) => {
        console.log(res.data);
        dispatch({ type: GET_SEARCH_CARDS, payload: { data: res.data, search: search }});
      }).catch((error) => {
        console.error(error);
        // Gérer les erreurs de récupération des données
      });
    } else {
      // Si la longueur de la chaîne de recherche est inférieure à 3
      // Dispatch une action avec la valeur de la recherche
      dispatch({ type: GET_SEARCH_CARDS, payload: { search: search }});
    }
  };
};

