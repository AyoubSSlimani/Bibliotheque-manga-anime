import {
  GET_CARDS,
  GET_COLLECTION_CARDS,
  POST_COLLECTION_CARDS,
  DELETE_COLLECTION_CARDS,
} from "../actions/carte.action";
import {
  CHANGE_SEARCH,
  TOGGLE_CHECKBOXES,
  TOGGLE_DECOCHER_TOUT,
  TOGGLE_TERMINER,
} from "../actions/checkboxes.action";
import { GET_NB_CARD, GET_PAGINATION } from "../actions/pagination.action";
import { filterCards } from "../components/Utils";


const initialState = {
  allCards: [],
  initialCards: [],
  filteredCards: [], // Ajout de la propriété filteredCards
  collectionCardsPost: [],
  collectionCardsGet: [],
  checkboxes: [
    { id: 0, name: "Action", checked: false },
    { id: 1, name: "Aventure", checked: false },
    { id: 2, name: "Combats", checked: false },
    { id: 3, name: "Comédie", checked: false },
    { id: 4, name: "Drame", checked: false },
    { id: 5, name: "Ecchi", checked: false },
    { id: 6, name: "École", checked: false },
    { id: 7, name: "Fantaisie", checked: false },
    { id: 8, name: "Horreur", checked: false },
    { id: 9, name: "Isekai", checked: false },
    { id: 10, name: "Josei", checked: false },
    { id: 11, name: "Mystère", checked: false },
    { id: 12, name: "Psychologique", checked: false },
    { id: 13, name: "Quotidien", checked: false },
    { id: 14, name: "Romance", checked: false },
    { id: 15, name: "Seinen", checked: false },
    { id: 16, name: "Shônen", checked: false },
    { id: 17, name: "Shôjo", checked: false },
    { id: 18, name: "Sports", checked: false },
    { id: 19, name: "Surnaturel", checked: false },
    { id: 20, name: "Tournois", checked: false },
    { id: 21, name: "Yaoi", checked: false },
    { id: 22, name: "Yuri", checked: false },
  ],
  terminer: [{ id: 50, name: "Terminé", checked: false }],
  searchText: "",
  pagination: [],
  nbCard: "12",
};

export default function carteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        allCards: [...state.allCards, ...action.payload],
        initialCards: action.payload,
        filteredCards: action.payload, // Initialisation de filteredCards avec toutes les cartes
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
      };

    case DELETE_COLLECTION_CARDS:
      return {
        ...state,
        collectionCardsGet: state.collectionCardsGet.filter(
          (post) => post.id !== action.payload
        ),
      };

    case TOGGLE_CHECKBOXES:
      const updatedCheckboxes = state.checkboxes.map((checkbox) => {
        if (checkbox.id === action.payload) {
          return {
            ...checkbox,
            checked: !checkbox.checked,
          };
        };
        return checkbox;
      });
      const filteredCardsCheckbox = filterCards(
        state.initialCards,
        updatedCheckboxes,
        state.terminer[0].checked,
        state.searchText,
      );
      
      return {
        ...state,
        checkboxes: updatedCheckboxes,
        filteredCards: filteredCardsCheckbox,
        allCards: filteredCardsCheckbox,
      };

    case TOGGLE_TERMINER:
        if (state.terminer[0].id === action.payload) {
          const updatedTerminer = {
            ...state.terminer[0],
            checked: !state.terminer[0].checked,
          };
          
          const filteredCardsTerminer = filterCards(state.initialCards, state.checkboxes, updatedTerminer.checked, state.searchText);
          
          return {
            ...state,
            terminer: [updatedTerminer],
            filteredCards: filteredCardsTerminer,
            allCards: filteredCardsTerminer
          };
        }
      
        return state;
      
      case CHANGE_SEARCH:
        const updatedSearch = action.payload;
        const filteredCardsSearch = filterCards(state.initialCards, state.checkboxes, state.terminer[0].checked, updatedSearch);
        return {
          ...state,
          searchText: updatedSearch,
          filteredCards: filteredCardsSearch,
          allCards: filteredCardsSearch,
        };
      

        
      case TOGGLE_DECOCHER_TOUT:
        const updatedCheckboxesDecocherTout = state.checkboxes.map(
          (checkbox) => ({
            ...checkbox,
            checked: false,
          })
        );
      
        const updatedTerminerDecocherTout = {
          ...state.terminer[0],
          checked: false
        };
      
        return {
          ...state,
          checkboxes: updatedCheckboxesDecocherTout,
          terminer: [updatedTerminerDecocherTout],
          filteredCards: state.initialCards,
          allCards: state.initialCards,
        };

      case GET_PAGINATION:
        console.log(action.payload);
        return {
          ...state,
          pagination: action.payload,
        };
      case GET_NB_CARD:
        return {
        ...state,
        nbCard: action.payload,
        }
      default:
        return state;
  }
}
