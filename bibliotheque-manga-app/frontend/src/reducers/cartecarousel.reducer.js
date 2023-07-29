import { GET_CAROUSEL_NOUVEAUTES_ANIME, GET_CAROUSEL_NOUVEAUTES_MANGA } from '../actions/cartecarousel.action';
import { GET_CAROUSEL_DERNIER_AJOUT_CARDS } from '../actions/cartecarousel.action';

const initialState = {
  nouveauteCards: [],
  dernierAjoutCards: [],
  pepiteCards: [],
};


export default function carteCarouselReducer(state= initialState, action) {
  switch (action.type) {
    case GET_CAROUSEL_NOUVEAUTES_ANIME:
        return {
          ...state,
          nouveauteCards: action.payload.data,
        };
    case GET_CAROUSEL_DERNIER_AJOUT_CARDS:
        return {
          ...state,
          dernierAjoutCards: action.payload,
        };
    case GET_CAROUSEL_NOUVEAUTES_MANGA:
        return {
            ...state,
            pepiteCards: action.payload.data,
        };  

    default:
        return state;
    
  };
};





