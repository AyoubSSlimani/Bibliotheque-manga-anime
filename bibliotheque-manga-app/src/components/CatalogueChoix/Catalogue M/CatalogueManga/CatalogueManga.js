import React, { useState, useEffect, useCallback, useRef } from 'react'
import SearchBarCatalogue from '../SearchBar/SearchBarCatalogue'
import Carte from '../BlockCarte/Carte'
import BlockCarte from '../BlockCarte/BlockCarte'
import Pagination from '../Pagination/Pagination'
import '../../../../styles/Carte.css'
import '../../../../styles/CatalogueManga.css'
import ButtonFiltre from '../Filtre/ButtonFiltre'
import { tabGenre, tabManga } from '../../../../data/DataGenre';




export default function CatalogueManga() {



  const [nbCard, setNbCard] = useState(12);


  const handleSelectChange = (event) => {
  const newValue = parseInt(event.target.value, 10);
  setNbCard(newValue);
}
    

    const [checked, setChecked] = useState(() => {
      const initialCheckedState = {};
      tabGenre.forEach((genre) => {
        initialCheckedState[genre] = false;
      });
      return initialCheckedState;
    });
  
    const handleCheckboxChange = (genre) => {
      setChecked((prevState) => ({
        ...prevState,
        [genre]: !prevState[genre]
      }
      ));

    
     
    };
  
    const handleUncheckAll = () => {
      setChecked((prevState) => {
        const updatedChecked = { ...prevState };
        tabGenre.forEach((genre) => {
          updatedChecked[genre] = false;
        });
        return updatedChecked;
      });
     
    };

    const checkedGenres = Object.keys(checked).filter((genre) => checked[genre]);

    const [checkedTerminer, setCheckedTerminer] = useState(false);

    

    const handleTerminerChange = (event) => {
      setCheckedTerminer(event.target.checked);
      };
    
    const [filterName, setFilterName] = useState('');

    //Fonction qui permet de trier les cartes en fonction des checkbox
    const handleTrierClick = useCallback(() => {
      
      
      if (checkedGenres.length === 0 && !checkedTerminer && filterName.length === 0) {
        // Aucun genre sélectionné et aucun filtrage par terminé, retourner la liste complète de mangas
        return tabManga;
      }
    
      let filteredMangaList = tabManga;

    
      if (checkedGenres.length > 0) {
        // Filtrer par genres
        filteredMangaList = filteredMangaList.filter((manga) => {
          const mangaGenres = manga.genre;
          const isMangaGenreMatched = mangaGenres.some((mangaGenre) =>
            checkedGenres.includes(mangaGenre)
          );
          return isMangaGenreMatched;
        });
      }
    
      if (checkedTerminer) {
        // Filtrer par manga terminé (true)
        filteredMangaList = filteredMangaList.filter((manga) => {
          const mangaTerminer = manga.terminer;
          return mangaTerminer === true;
        });
        return filteredMangaList;
      }
      
      if (filterName.length > 0) {
        filteredMangaList = filteredMangaList.filter((manga) => {
          if (manga.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
            return null;
          } else if (manga.name.toLowerCase().indexOf(filterName.toLowerCase()) === 0) {
            return manga.id;
          }
          return filteredMangaList;
        });
      }
    
     
    
      // Faites ce que vous souhaitez avec la liste filtrée de mangas ici
      return filteredMangaList;
    }, [checkedGenres, checkedTerminer, filterName]);
    
    

    //Gérer la pagination 
    const [currentPage, setCurrentPage] = useState(1);

    

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * nbCard;
    const endIndex = startIndex + nbCard;
    const currentItems = handleTrierClick().slice(startIndex, endIndex);
   
    const [totalItems, setTotalItems] = useState(currentItems.length);
    
    useEffect(() => {
      const filteredMangaList = handleTrierClick(); // Récupérer la liste filtrée actuelle
      setTotalItems(filteredMangaList.length); // Mettre à jour le nombre total d'items
  
      }, [handleTrierClick]); 
     
   

    const totalPages = Math.ceil(totalItems / nbCard);

    //Fonction qui permet de recherche un manga par son nom
    
    
    
    

  return (
    <div className='container'>
      <h1>Catalogue Manga</h1>
      <SearchBarCatalogue 
          filterName={filterName}
          onFilterNameChange={setFilterName}
          handleTrierClick={handleTrierClick}
          >
            
      </SearchBarCatalogue>
      <div className='button-filtre-component'>
        <div className='button-filtre'>
          <ButtonFiltre 
          checked={checked} 
          onCheckboxChange={handleCheckboxChange} 
          onUncheckAll={handleUncheckAll}
          checkedTerminer={checkedTerminer}
          handleTerminerChange={handleTerminerChange}
          
          
          ></ButtonFiltre>
        </div>
      </div>
      <div className='blockCarteManga'>
        <BlockCarte nbCard={nbCard}  handleSelectChange={handleSelectChange}/>
        <div className="container-card">
          <Carte 
          nbCard={nbCard} 
          handleSelectChange={handleSelectChange} 
          handleTrierClick={handleTrierClick} 
          checked={checked} 
          currentItems={currentItems}
          currentPage={currentPage}
          filterName={filterName}
          setTotalItems={setTotalItems}
         
          />
        </div>
      </div>
      <div classNameName="container-pagination">
            <div className="sous-container-pagination">
              <Pagination 
              nbCard={nbCard} 
              handlePageChange={handlePageChange} 
              totalPages={totalPages}
              currentPage={currentPage}
              />
            </div>
      </div>
    </div>
  )
}

