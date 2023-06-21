import { GET_CARDS, GET_COLLECTION_CARDS, POST_COLLECTION_CARDS, DELETE_COLLECTION_CARDS } from '../actions/carte.action';

const initialState = {
  allCards: [],
  collectionCardsPost:[],
  collectionCardsGet:[],
};


export default function carteReducer(state= initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        allCards: action.payload,
      };
    case POST_COLLECTION_CARDS:
        return {
          ...state,
          collectionCardsPost: [...state.collectionCardsPost, action.payload],
        };
    case GET_COLLECTION_CARDS:
        return {
          ...state,
          collectionCardsGet: action.payload,
        }
    case DELETE_COLLECTION_CARDS:
      console.log(state.collectionCardsGet.filter((post) => post.id));
      return {
        ...state,
      collectionCardsGet: state.collectionCardsGet.filter((post) => post.id != action.payload)
      };
    default:
      return state;
  };
};

