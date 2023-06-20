import axios from "axios";

export const GET_CARDS = "GET_CARDS";
export const GET_ONE_CARD = "GET_ONE_CARD";
export const POST_COLLECTION_CARDS = "POST_COLLECTION_CARDS";


export const getCards = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/cartes").then((res) => {
            dispatch({ type: GET_CARDS, payload: res.data });
        });
        

};

};

export const postCollectionCards = (data) => {
    return (dispatch) => {
        console.log(data);
        return axios.post('http://localhost:3001/maCollection', data ).then((res) => {
            dispatch({ type: POST_COLLECTION_CARDS, payload: data });
            
        })
        

};

};



