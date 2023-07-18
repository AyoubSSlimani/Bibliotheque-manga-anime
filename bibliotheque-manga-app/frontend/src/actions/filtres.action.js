import axios from 'axios'
import { getCards } from './carte.action'

export const GET_CHECKBOXES_NAME = 'GET_CHECKBOXES_NAME'
export const TOGGLE_CHECKBOXES = 'TOGGLE_CHECKBOXES'
export const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT'
export const GET_NB_CARD = 'GET_NB_CARD'

export const getCheckboxesName = (nameComponent) => {
  return async (dispatch) => {
    try {
      if (nameComponent === "Anime") {
        const timestamp = parseInt(Date.now() / 1000)
      const response = await axios.get(`https://api.jikan.moe/v4/genres/anime?&q=&timestamp=${timestamp}`)
      dispatch({ type: GET_CHECKBOXES_NAME, payload: response.data.data })
      return response.data.data
      } 
      else {
        const timestamp = parseInt(Date.now() / 1000)
        const response = await axios.get(`https://api.jikan.moe/v4/genres/manga?&q=&timestamp=${timestamp}`)
        dispatch({ type: GET_CHECKBOXES_NAME, payload: response.data.data })
        
        return response.data.data
      }
      
    } catch (error) {
      console.error(error)
      // Gérer les erreurs de récupération des données
      throw error
    }
  }
}

export const toggleCheckboxes = (checkboxId, nameComponent) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_CHECKBOXES, payload: checkboxId })
    const compName = nameComponent;

    await dispatch(getCards(1, compName));
  }
}

export const getSearchText = (search, nameComponent) => {
  return async (dispatch) => {
    // Si la longueur de la chaîne de recherche est inférieure à 3
    // Dispatch une action avec la valeur de la recherche
    dispatch({ type: GET_SEARCH_TEXT, payload: search })
    const compName = nameComponent;

    await dispatch(getCards(1, compName));
  }
}

export const getNbCard = (nbCard) => {
  return (dispatch) => {
    dispatch({ type: GET_NB_CARD, payload: nbCard })
  }
}
