import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const GET_ONE_CARD = "GET_ONE_CARD";
export const POST_COLLECTION_CARDS = "POST_COLLECTION_CARDS";


export const getCards = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/cartes").then((res) => {
            dispatch({ type: GET_CARDS, payload: res.data });
        });
        

};

};



export const postCollectionCards = (data) => {
    return (dispatch) => {
      // Vérifier si le nom existe déjà dans la base de données
      axios.get('http://localhost:3001/maCollection?name=' + data.name)
        .then((res) => {
          if (res.data.length > 0) {
            // Le nom existe déjà, vous pouvez gérer cette situation en conséquence
            console.log('Le nom existe déjà dans la base de données');
          } else {
            // Le nom n'existe pas, vous pouvez procéder à l'ajout
            return axios.post('http://localhost:3001/maCollection', data)
              .then((res) => {
                dispatch({ type: POST_COLLECTION_CARDS, payload: data });
              });
          }
        })
        .catch((error) => {
          // Gérer les erreurs de requête GET
          console.error('Erreur lors de la requête GET :', error);
        });
    };
  };


