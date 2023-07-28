import axios from "axios";
import { filterCards } from "../components/Utils";

export const GET_CARDS = "GET_CARDS";
export const POST_COLLECTION_CARDS = "POST_COLLECTION_CARDS";
export const GET_COLLECTION_CARDS = "GET_COLLECTION_CARDS";
export const DELETE_COLLECTION_CARDS = "DELETE_COLLECTION_CARDS";
export const GET_CARD_DATA = "GET_CARD_DATA";

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
// Supposez que vous avez déjà importé axios dans votre fichier

export const postCollectionCards = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://bibliothequemanga.onrender.com/MaCollection", data);
      console.log(response.data.message);
      const message = response.data.message;
      dispatch({ type: POST_COLLECTION_CARDS, payload: message });
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la requête POST :', error);
    }
  };
};


// récupère les cartes de maCollection de la bdd
export const getCollectionCards = () => {
  return (dispatch) => {
    return axios.get("https://bibliothequemanga.onrender.com/MaCollection").then((res) => {
      const cardData = res.data;
      dispatch({ type: GET_COLLECTION_CARDS, payload: cardData });
    });
  };
};

// supprime une carte de ma collection

export const deleteCollectionCards = (postId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete("https://bibliothequemanga.onrender.com/MaCollection", postId);
      console.log(response.data.message);
      const message = response.data.message;
      dispatch({ type: DELETE_COLLECTION_CARDS, payload: { postId, message } });
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la requête POST :', error);
    }
  };
};
  
// Récupère les données de la carte cliquée.
export const getCardData = (card) => {
  return (dispatch) => {
    dispatch({ type: GET_CARD_DATA, payload: card });
  };
};