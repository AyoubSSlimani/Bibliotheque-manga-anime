import { GET_CAROUSEL_NOUVEAUTE_CARDS, GET_CAROUSEL_PEPITE_CARDS } from '../actions/cartecarousel.action';
import { GET_CAROUSEL_DERNIER_AJOUT_CARDS } from '../actions/cartecarousel.action';

const initialState = {
  nouveauteCards: [],
  dernierAjoutCards: [],
  pepiteCards: [],
};


export default function carteCarouselReducer(state= initialState, action) {
  switch (action.type) {
    case GET_CAROUSEL_NOUVEAUTE_CARDS:
        return {
          ...state,
          nouveauteCards: action.payload,
        };
    case GET_CAROUSEL_DERNIER_AJOUT_CARDS:
        return {
          ...state,
          dernierAjoutCards: action.payload,
        };
    case GET_CAROUSEL_PEPITE_CARDS:
        return {
            ...state,
            pepiteCards: action.payload,
        };  

    default:
        return state;
    
  };
};





