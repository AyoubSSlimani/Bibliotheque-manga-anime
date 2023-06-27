export const TOGGLE_CHECKBOXES = "TOGGLE_CHECKBOXES";
export const TOGGLE_TERMINER = "TOGGLE_TERMINER";
export const TOGGLE_DECOCHER_TOUT = "TOGGLE_DECOCHER_TOUT";
export const CHANGE_SEARCH = "CHANGE_SEARCH";


export const toggleCheckboxes = (checkboxId) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_CHECKBOXES,
      payload: checkboxId,
      
    });
  };
};


export const toggleTerminer = (terminerId) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_TERMINER,
      payload: terminerId,
    });
  };
};

export const changeSearch = (searchText) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SEARCH,
      payload: searchText,
    });
  };
};

export const DecocherTout = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_DECOCHER_TOUT,
     
    });
  };
};