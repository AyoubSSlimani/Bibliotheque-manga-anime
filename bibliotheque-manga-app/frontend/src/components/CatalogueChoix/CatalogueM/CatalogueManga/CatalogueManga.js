//REACT
import React, { useState, useEffect, useCallback, useRef } from "react";
//REDUX
import { useDispatch } from "react-redux";
//COMPONENTS
import SearchBarCatalogue from "../SearchBar/SearchBarCatalogue";
import Carte from "../BlockCarte/Carte";
import BlockCarte from "../BlockCarte/BlockCarte";
import Pagination from "../Pagination/Pagination";
//CSS
import "../../../../styles/Carte.css";
import "../../../../styles/CatalogueManga.css";
import ButtonFiltre from "../Filtre/ButtonFiltre";
import { getCards } from "../../../../actions/carte.action";


export default function CatalogueManga() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);

  


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


