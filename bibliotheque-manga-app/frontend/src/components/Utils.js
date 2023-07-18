import axios from 'axios';

export const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };



  export async function filterCards(page, checkboxes, searchText, animeOrManga) {
      try {
        if (animeOrManga === "Manga") {
          console.log(animeOrManga);
          const timestamp = parseInt(Date.now() / 1000); // Divisez par 1000 pour obtenir le timestamp en secondes
          let filteredCards = [];
          let response;
          const nbPage = page;
          const search = searchText.toLowerCase();
          const checkboxTerminer = checkboxes.find(checkbox => checkbox.mal_id === "complete");
          
          
          const statusTerminer = checkboxTerminer.mal_id;
          const isCheckboxTerminerChecked = checkboxTerminer.checked;

          const checkboxesUnchecked = checkboxes.every(checkbox => !checkbox.checked);
          const checkedGenres = checkboxes
              .filter(checkbox => checkbox.checked)
              .map(checkbox => checkbox.mal_id);
          const checkedGenresWithoutTerminer = checkedGenres.filter(genreId => genreId !== statusTerminer);
          const checkedGenresIds = checkedGenresWithoutTerminer.join(',');
          

          // CAS OU AUCUN FILTRE SAUF NBPAGE //
          if (checkboxesUnchecked && search.length < 3 && nbPage && isCheckboxTerminerChecked === false) { 
                response = await axios.get(`https://api.jikan.moe/v4/manga?&q=&page=${nbPage}&sfw&timestamp=${timestamp}`);
          } else { // COUVRE TOUS LESx AUTRES CAS //
            if (isCheckboxTerminerChecked === true) {
                response = await axios.get(`https://api.jikan.moe/v4/manga?q=${search}&genres=${checkedGenresIds}&page=${nbPage}&status=${statusTerminer}&sfw&timestamp=${timestamp}`);
            } else if (search.length < 3) {
                response = await axios.get(`https://api.jikan.moe/v4/manga?q=&genres=${checkedGenresIds}&page=${nbPage}&sfw&timestamp=${timestamp}`);
            } else {
                response = await axios.get(`https://api.jikan.moe/v4/manga?q=${search}&genres=${checkedGenresIds}&page=${nbPage}&sfw&timestamp=${timestamp}`);
            }
          }
          filteredCards = response.data;
          return filteredCards;

        } else {
          console.log(animeOrManga);
          const timestamp = parseInt(Date.now() / 1000); // Divisez par 1000 pour obtenir le timestamp en secondes
          let filteredCards = [];
          let response;
          const nbPage = page;
          const search = searchText.toLowerCase();
          const checkboxTerminer = checkboxes.find(checkbox => checkbox.mal_id === "complete");
          
          
          const statusTerminer = checkboxTerminer.mal_id;
          const isCheckboxTerminerChecked = checkboxTerminer.checked;

          const checkboxesUnchecked = checkboxes.every(checkbox => !checkbox.checked);
          const checkedGenres = checkboxes
              .filter(checkbox => checkbox.checked)
              .map(checkbox => checkbox.mal_id);
          const checkedGenresWithoutTerminer = checkedGenres.filter(genreId => genreId !== statusTerminer);
          const checkedGenresIds = checkedGenresWithoutTerminer.join(',');
          

          // CAS OU AUCUN FILTRE SAUF NBPAGE //
          if (checkboxesUnchecked && search.length < 3 && nbPage && isCheckboxTerminerChecked === false) { 
                response = await axios.get(`https://api.jikan.moe/v4/anime?&q=&page=${nbPage}&sfw&timestamp=${timestamp}`);
          } else { // COUVRE TOUS LESx AUTRES CAS //
            if (isCheckboxTerminerChecked === true) {
                response = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&genres=${checkedGenresIds}&page=${nbPage}&status=${statusTerminer}&sfw&timestamp=${timestamp}`);
            } else if (search.length < 3) {
                response = await axios.get(`https://api.jikan.moe/v4/anime?q=&genres=${checkedGenresIds}&page=${nbPage}&sfw&timestamp=${timestamp}`);
            } else {
                response = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&genres=${checkedGenresIds}&page=${nbPage}&sfw&timestamp=${timestamp}`);
            }
          }
          filteredCards = response.data;
          return filteredCards;
        }
      } catch (error) {
        // Gérer les erreurs de l'appel API
        console.error('Erreur lors de l\'appel API :', error);
      }
    };
   

  
  