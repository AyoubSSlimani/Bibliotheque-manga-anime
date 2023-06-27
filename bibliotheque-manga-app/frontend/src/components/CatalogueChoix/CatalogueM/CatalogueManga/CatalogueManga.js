import React, { useState, useEffect, useCallback, useRef } from "react";
import SearchBarCatalogue from "../SearchBar/SearchBarCatalogue";
import Carte from "../BlockCarte/Carte";
import BlockCarte from "../BlockCarte/BlockCarte";
import Pagination from "../Pagination/Pagination";
import "../../../../styles/Carte.css";
import "../../../../styles/CatalogueManga.css";
import ButtonFiltre from "../Filtre/ButtonFiltre";
import { getCards } from "../../../../actions/carte.action";
import { useDispatch } from "react-redux";

export default function CatalogueManga() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  

  //   if (filterName.length > 0) {
  //     filteredMangaList = filteredMangaList.filter((manga) => {
  //       if (manga.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1) {
  //         return null;
  //       } else if (manga.name.toLowerCase().indexOf(filterName.toLowerCase()) === 0) {
  //         return manga.id;
  //       }
  //       return filteredMangaList;
  //     });
  //   }

  //   // Faites ce que vous souhaitez avec la liste filtrée de mangas ici
  //   return filteredMangaList;
  // }, [checkedGenres, checkedTerminer, filterName]);

  //Gérer la pagination
  // const [currentPage, setCurrentPage] = useState(1);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const startIndex = (currentPage - 1) * nbCard;
  // const endIndex = startIndex + nbCard;
  // const currentItems = handleTrierClick().slice(startIndex, endIndex);

  // const [totalItems, setTotalItems] = useState(currentItems.length);

  // useEffect(() => {
  //   const filteredMangaList = handleTrierClick(); // Récupérer la liste filtrée actuelle
  //   setTotalItems(filteredMangaList.length); // Mettre à jour le nombre total d'items

  //   }, [handleTrierClick]);

  // const totalPages = Math.ceil(totalItems / nbCard);

  //Fonction qui permet de recherche un manga par son nom

  return (
    <div className="container">
      <h1>Catalogue Manga</h1>
      <SearchBarCatalogue />

      <div className="button-filtre-component">
        <div className="button-filtre">
          <ButtonFiltre />
        </div>
      </div>
      <div className="blockCarteManga">
        <BlockCarte />
        <div className="container-card">
          <Carte />
        </div>
        
      </div>
      <div classNameName="container-pagination">
        <div className="sous-container-pagination">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
