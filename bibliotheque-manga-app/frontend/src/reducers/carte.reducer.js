import {
  GET_CARDS,
  GET_COLLECTION_CARDS,
  POST_COLLECTION_CARDS,
  DELETE_COLLECTION_CARDS,
} from "../actions/carte.action";
import {
  FILTER_ALL_CARDS,
  GET_CHECKBOXES_NAME,
  GET_SEARCH_CARDS,
  TOGGLE_CHECKBOXES,
} from "../actions/filtres.action";
import { GET_NB_CARD } from "../actions/pagination.action";


const initialState = {
  allCards: [],
  collectionCardsPost: [],
  collectionCardsGet: [],
  checkboxes: [],
  searchText: "",
  nbCard: "25",
  paginationAllCards: [],
  paginationFilteredCards: [],
};



export default function carteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      const newCards = action.payload.data;
      const paginationNewCards = action.payload.pagination;
      // // Récupérer les données précédentes en cache
      const cachedCards = localStorage.getItem('cachedCards')
        ? JSON.parse(localStorage.getItem('cachedCards'))
        : [];
      
      // // Vérifier les doublons dans les nouvelles données
      const uniqueNewCards = newCards.filter((card) => !cachedCards.some((c) => c.mal_id === card.mal_id));

      // // Combiner les données précédentes avec les nouvelles données uniques
      const allCards = [...cachedCards, ...uniqueNewCards].map((card) => ({ ...card}));

      // // Mettre à jour le cache avec les nouvelles données combinées
      localStorage.setItem('cachedCards', JSON.stringify(allCards));
      // localStorage.removeItem('cachedCards'); 
      console.log("cachedAllCards",allCards);
      // // pour remove le cache pour débugger.
      
      return {
        ...state,
        allCards: allCards,
        paginationAllCards: paginationNewCards,
        paginationFilteredCards: [],
      };

    // GET CHECKBOXES ->
    case GET_CHECKBOXES_NAME:
      const checkboxes = action.payload.map((checkbox) => {
        const { mal_id, name, count} = checkbox;
        return { mal_id, name, count, checked: false };
        
      });
      const terminer = {mal_id: "complete", name: "Terminé", checked: false};
      const decocherTout = {mal_id: "decocherTout", name: "Décocher Tout", checked: false};
      checkboxes.push(terminer);
      checkboxes.push(decocherTout);
      
      return {
        ...state,
        checkboxes: checkboxes,
      };

    // GET CHECKBOXES

    // COLLECTION CARDS --> 
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
    // COLLECTION CARDS

    // FILTRES -> 

    case TOGGLE_CHECKBOXES:
      const checkboxId = action.payload;
      if (checkboxId === "decocherTout") {
        const updatedCheckboxesDecocherTout = state.checkboxes.map((checkbox) => ({
          ...checkbox,
          checked: false,
        }));
        return {
          ...state,
          checkboxes: updatedCheckboxesDecocherTout,
        };
      } else {
        const updatedCheckboxes = state.checkboxes.map((checkbox) => {
          if (checkbox.mal_id === checkboxId) {
            return {
              ...checkbox,
              checked: !checkbox.checked,
            };
          }
          return checkbox;
        });
        return {
          ...state,
          checkboxes: updatedCheckboxes,
        };
    }

    case FILTER_ALL_CARDS:
      const filteredCards = action.payload.data;
      const paginationFilteredCards = action.payload.pagination;
      console.log(filteredCards.map(card => card.genres));
      console.log(paginationFilteredCards);
      return {
        ...state,
        allCards: filteredCards,
        paginationFilteredCards: paginationFilteredCards,
      }
      


    case GET_SEARCH_CARDS:
      const updatedSearch = action.payload.search;
      const allCardsSearchData = action.payload.data ? action.payload.data.data : [];
      return {
        ...state,
        searchText: updatedSearch,
        allCards: allCardsSearchData.length === 0 ? [...state.allCards] : allCardsSearchData,
      };
      //FILTRES//

      //NB CARD->
    
      case GET_NB_CARD:
        return {
          ...state,
          nbCard: action.payload,
        };
      default:
        return state;
  }
}
