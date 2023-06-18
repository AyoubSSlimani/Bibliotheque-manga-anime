import axios from "axios";

export const GET_CARDS = "GET_CARDS";

export const getCards = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/cartes").then((res) => {
            dispatch({ type: GET_CARDS, payload: res.data });
        });
        

};

};
