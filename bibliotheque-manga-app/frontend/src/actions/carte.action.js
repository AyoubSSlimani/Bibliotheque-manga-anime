import axios from "axios";
import { filterCards } from "../components/Utils";

export const GET_CARDS = "GET_CARDS";
export const POST_COLLECTION_CARDS = "POST_COLLECTION_CARDS";
export const GET_COLLECTION_CARDS = "GET_COLLECTION_CARDS";
export const DELETE_COLLECTION_CARDS = "DELETE_COLLECTION_CARDS";

// Récupère toutes les cartes de l'API Jikan par page lorsque je change de page.
// par défaut les cartes récupérés = page 1 de jikan.
export const getCards = (page, nameComponent) => async (dispatch, getState) => {
  const animeOrManga = nameComponent;
  const nbPage = page;
  const updatedCheckboxes = getState().carteReducer.checkboxes;
  const searchText = getState().carteReducer.searchText;
  try {
    const filteredCards = await filterCards(
      nbPage,
      updatedCheckboxes,
      searchText, 
      animeOrManga,
    );
    dispatch({ type: GET_CARDS, payload: filteredCards });
  } catch (error) {
    console.error("Erreur lors de la requête GET_CARDS:", error);
  }
};


// Envoie à la base de données les cartes que l'on a ajouté à maCollection
export const postCollectionCards = (data) => {
  return (dispatch) => {
    const cardData = data;
    axios.post("http://localhost:3010/MaCollection/", cardData);
  };
};

// récupère les cartes de maCollection de la bdd
export const getCollectionCards = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3010/MaCollection/").then((res) => {
      const cardData = res.data;

      dispatch({ type: GET_COLLECTION_CARDS, payload: cardData });
    });
  };
};

// supprime une carte de ma collection

export const deleteCollectionCards = (postId) => {
  return (dispatch) => {
    axios.delete("http://localhost:3010/MaCollection/", postId);
    dispatch({ type: DELETE_COLLECTION_CARDS, payload: postId });
  };
};
  