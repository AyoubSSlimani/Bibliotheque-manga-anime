import axios from "axios";

export const GET_CAROUSEL_NOUVEAUTES_ANIME = "GET_CAROUSEL_NOUVEAUTES_ANIME";
export const GET_CAROUSEL_DERNIER_AJOUT_CARDS = "GET_CAROUSEL_DERNIER_AJOUT_CARDS";
export const GET_CAROUSEL_NOUVEAUTES_MANGA = "GET_CAROUSEL_NOUVEAUTES_MANGA";

export const getCarouselNouveautesAnime = () => {
    return (dispatch) => {
        const timestamp = parseInt(Date.now() / 1000);
        return axios.get(`https://api.jikan.moe/v4/top/anime?&q=&sfw&filter=airing&timestamp=${timestamp}`).then((res) => {
          dispatch({ type: GET_CAROUSEL_NOUVEAUTES_ANIME, payload: res.data });
        });       
    };

  };

export const getCarouselDernierAjoutCards = () => {
    return (dispatch) => {
      return axios.get("https://bibliothequemanga.onrender.com/MaCollection").then((res) => {
  
        dispatch({ type: GET_CAROUSEL_DERNIER_AJOUT_CARDS, payload: res.data });
      });
    };
  };


export const getCarouselNouveautesManga = () => {
    return (dispatch) => {
      const timestamp = parseInt(Date.now() / 1000);
        return axios.get(`https://api.jikan.moe/v4/top/manga?&q=&sfw&filter=publishing&timestamp=${timestamp}`).then((res) => {
            dispatch({ type: GET_CAROUSEL_NOUVEAUTES_MANGA, payload: res.data });
        });
};

};

