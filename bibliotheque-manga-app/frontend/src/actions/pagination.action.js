export const GET_NB_CARD = "GET_NB_CARD";




  export const getNbCard = (nbCard) => {
    return (dispatch) => {
      dispatch({ type: GET_NB_CARD, payload: nbCard  });
    };
  };
