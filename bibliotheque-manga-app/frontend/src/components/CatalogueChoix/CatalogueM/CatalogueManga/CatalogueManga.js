//REACT
import React, { useEffect } from "react";
//REDUX
import { useDispatch, useSelector } from "react-redux";
//COMPONENTS
import SearchBarCatalogue from "../SearchBar/SearchBarCatalogue";
import Carte from "../BlockCarte/Carte";
import BlockCarte from "../BlockCarte/BlockCarte";
import Pagination from "../Pagination/Pagination";
//CSS
import "../../../../styles/Carte.css";
import "../../../../styles/CatalogueManga.css";
import ButtonFiltre from "../Filtre/ButtonFiltre";
import { getCheckboxesName } from "../../../../actions/filtres.action";
import { getCards } from "../../../../actions/carte.action";


export default function CatalogueManga() {
  const dispatch = useDispatch();
  const nameComponent = "Manga";

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCheckboxesName(nameComponent)); 
      await dispatch(getCards(1, nameComponent));
    };
    fetchData(); 
  }, []);


  

  return (
    <div className="container-catalogue-manga">
      <h1>Catalogue Manga</h1>
      <SearchBarCatalogue nameComponent={nameComponent}/>

      <div className="button-filtre-component">
        <div className="button-filtre">
          <ButtonFiltre nameComponent={nameComponent}/>
        </div>
      </div>
      <div className="blockCarteManga">
        <BlockCarte />
        <div className="container-card">
          <Carte nameComponent={nameComponent}/>
        </div>
        
      </div>

      <div className="container-pagination">
        <div className="sous-container-pagination">
          <Pagination nameComponent={nameComponent}/>
        </div>
      </div>
    </div>
  );
}


