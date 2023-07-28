import {
  GET_CARDS,
  GET_COLLECTION_CARDS,
  DELETE_COLLECTION_CARDS,
  GET_CARD_DATA,
} from "../actions/carte.action";
import {
  GET_CHECKBOXES_NAME,
  GET_SEARCH_TEXT,
  TOGGLE_CHECKBOXES,
  GET_NB_CARD,
} from "../actions/filtres.action";



const initialState = {
  allCards: [],
  postCollectionCards: [],
  getCollectionCards: [],
  checkboxes: [],
  searchText: "",
  nbCard: "25",
  pagination: [],
  cardData: [],
};



export default function carteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      const newCards = action.payload.data;
      const paginationNewCards = action.payload.pagination;   
      return {
        ...state,
        allCards: newCards,
        pagination: paginationNewCards, 
      };
    case GET_CARD_DATA:
        const carteData = action.payload;
        return {
          ...state,
          cardData: carteData,
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

    case GET_SEARCH_TEXT:
      const updatedSearch = action.payload;
      return {
        ...state,
        searchText: updatedSearch,
      };

      //FILTRES//

      //NB CARD->
    
    case GET_NB_CARD:
      return {
        ...state,
        nbCard: action.payload,
      };

       // COLLECTION CARDS --> 
      
    case GET_COLLECTION_CARDS:
      return {
        ...state,
        getCollectionCards: action.payload,
      };

    case DELETE_COLLECTION_CARDS:
      return {
        ...state,
        getCollectionCards: state.getCollectionCards.filter(
          (carte) => carte.mal_id !== action.payload
        ),
      };
    // COLLECTION CARDS <-
      default:
        return state;
  }
}
