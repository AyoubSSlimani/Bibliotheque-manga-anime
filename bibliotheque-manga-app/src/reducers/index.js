import { combineReducers } from "redux";
import carteReducer from "./carte.reducer";
import carteCarouselReducer from "./cartecarousel.reducer";



export default combineReducers({
    // REDUCERS 
    carteReducer,
    carteCarouselReducer,
    

});