import axios from "axios";

export const GET_CAROUSEL_NOUVEAUTE_CARDS = "GET_CAROUSEL_NOUVEAUTE_CARDS";
export const GET_CAROUSEL_DERNIER_AJOUT_CARDS = "GET_CAROUSEL_DERNIER_AJOUT_CARDS";
export const GET_CAROUSEL_PEPITE_CARDS = "GET_CAROUSEL_PEPITE_CARDS";

export const getCarouselNouveauteCards = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/caroussel-nouveaute").then((res) => {
            dispatch({ type: GET_CAROUSEL_NOUVEAUTE_CARDS, payload: res.data });
        });       
};

};

export const getCarouselDernierAjoutCards = () => {
    return (dispatch) => {
      return axios.get("http://localhost:3010/MaCollection/").then((res) => {
        console.log('Ma Collection: ',res.data);
  
        dispatch({ type: GET_CAROUSEL_DERNIER_AJOUT_CARDS, payload: res.data });
      });
    };
  };


export const getCarouselPepiteCards = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/caroussel-pepite").then((res) => {
            dispatch({ type: GET_CAROUSEL_PEPITE_CARDS, payload: res.data });
        });       
};

};

