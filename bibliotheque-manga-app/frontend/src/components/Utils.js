export const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };
  


  export function filterCards(initialCards, checkboxes, terminer, searchText) {
    const checkboxesUnchecked = checkboxes.every(checkbox => !checkbox.checked);
    let filteredCards = [];
  
    if (checkboxesUnchecked && !terminer && searchText === "") {
      return initialCards;
    } 
  
    if (!checkboxesUnchecked) {
      const checkedGenres = checkboxes
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.name);
  
      const genreMatchedCards = initialCards.filter(card => {
        const genreMatch = card.genre.some(genre => checkedGenres.includes(genre));
        console.log(genreMatch);
        return genreMatch;
      });
  
      filteredCards = genreMatchedCards;
    }
  
    if (terminer) {
      const terminerMatchedCards = initialCards.filter(card => {
        const terminerMatch = card.terminer;
        console.log(terminerMatch);
        return terminerMatch;
      });
  
      filteredCards = terminerMatchedCards;
    }
  
    if (searchText !== "") {
      const searchTextMatchedCards = initialCards.filter(card => {
        const cardName = card.name.toLowerCase();
        const searchTextLower = searchText.toLowerCase();
  
        if (cardName.indexOf(searchTextLower) === -1) {
          return false;
        } else if (cardName.indexOf(searchTextLower) === 0 || cardName.includes(searchTextLower)) {
          console.log(card.id);
          return true;
        }
        
        return false;
      });
  
      filteredCards = searchTextMatchedCards;
    }
  
    return filteredCards;
  }
  