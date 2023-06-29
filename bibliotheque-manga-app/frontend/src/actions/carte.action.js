import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const GET_ONE_CARD = "GET_ONE_CARD";
export const POST_COLLECTION_CARDS = "POST_COLLECTION_CARDS";
export const GET_COLLECTION_CARDS = "GET_COLLECTION_CARDS";
export const DELETE_COLLECTION_CARDS = "DELETE_COLLECTION_CARDS";

// Récupère toutes les cartes de la base de données (sauf caroussels et macollection)
export const getCards = (page) => {
  return (dispatch) => {

    return axios.get(`https://api.jikan.moe/v4/anime?page=${page}`).then((res) => {
      dispatch({ type: GET_CARDS, payload: res.data.data});
    }).catch((error) => {
      console.error(error);
      // Gérer les erreurs de récupération des données
    });
  };
};

// Envoie à la base de données les cartes que l'on a ajouté à maCollection

export const postCollectionCards = (data) => {
  console.log(data);
  return (dispatch) => {
    return axios
      .post('http://localhost:3010/MaCollection', data)
      .then((res) => {
        dispatch({ type: POST_COLLECTION_CARDS, payload: data });
      })
      .catch((error) => {
        // Gérer les erreurs de requête POST
        console.error('Erreur lors de la requête POST :', error);
      });
  };
};



  // récupère les cartes de maCollection de la bdd

  export const getCollectionCards = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/maCollection").then((res) => {
            
            dispatch({ type: GET_COLLECTION_CARDS, payload: res.data });
        });
};

};  


// supprime une carte de ma collection
  
    export const deleteCollectionCards = (postId) => {
        return (dispatch) => {
            return axios.delete(`http://localhost:3001/maCollection/${postId}`).then((res) => {
                
                dispatch({ type: DELETE_COLLECTION_CARDS, payload: postId });
            });

        };

    };  


    


