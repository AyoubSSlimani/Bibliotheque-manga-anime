import { GET_CARDS } from '../actions/carte.action';

const initialState = {};


export default function carteReducer(state= initialState, action) {
  switch (action.type) {
    case GET_CARDS:
        return action.payload;
    default:
        return state;
  }
}
