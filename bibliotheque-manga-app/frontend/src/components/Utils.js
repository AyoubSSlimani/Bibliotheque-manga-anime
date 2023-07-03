import axios from 'axios';

export const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };
  
  export async function filterCards(checkboxes, page) {
      try {
        const timestamp = parseInt(Date.now() / 1000); // Divisez par 1000 pour obtenir le timestamp en secondes
        let filteredCards = [];
        const nbPage = page;
        console.log(nbPage);

        const checkboxTerminer = checkboxes.find(checkbox => checkbox.mal_id === "complete");
        const statusTerminer = checkboxTerminer.mal_id;
        const isCheckboxTerminerChecked = checkboxTerminer.checked;

        const checkboxesUnchecked = checkboxes.every(checkbox => !checkbox.checked);
        const checkedGenres = checkboxes
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.mal_id);
        const checkedGenresWithoutTerminer = checkedGenres.filter(genreId => genreId !== statusTerminer);
        const checkedGenresIds = checkedGenresWithoutTerminer.join(',');
        
        

        if (checkboxesUnchecked) {
          const response = await axios.get(`https://api.jikan.moe/v4/manga?&q=&sfw&timestamp=${timestamp}`);
          const apiCards = response.data;
          filteredCards = apiCards;
          
          return filteredCards;
        }; 

       
        

        if (!checkboxesUnchecked || isCheckboxTerminerChecked) {
          let response;
          isCheckboxTerminerChecked === true ? response = await axios.get(`https://api.jikan.moe/v4/manga?q=&genres=${checkedGenresIds}&page=${page}&status=${statusTerminer}&sfw&timestamp=${timestamp}`)
          : response = await axios.get(`https://api.jikan.moe/v4/manga?q=&genres=${checkedGenresIds}&page=${page}&sfw&timestamp=${timestamp}`);
          const apiCards = response.data;
          filteredCards = apiCards;
          return filteredCards;
        };

        
        return filteredCards;

      } catch (error) {
        // Gérer les erreurs de l'appel API
        console.error('Erreur lors de l\'appel API :', error);
        // Retourner les cartes filtrées jusqu'à présent
      
      };
    };
   

  
  