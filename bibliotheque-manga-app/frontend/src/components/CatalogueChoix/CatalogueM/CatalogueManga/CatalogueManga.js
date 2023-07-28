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

import ButtonFiltre from "../Filtre/ButtonFiltre";
import { getCheckboxesName } from "../../../../actions/filtres.action";
import { getCards } from "../../../../actions/carte.action";


export default function CatalogueManga() {
  useEffect(() => {
    // Déplace la vue vers le haut de la page lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []);
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
    <div className="container-catalogue">
      <h1>Catalogue Manga</h1>
      <SearchBarCatalogue nameComponent={nameComponent}/>
      <ButtonFiltre nameComponent={nameComponent}/>  
      <Carte nameComponent={nameComponent}/>
      <div className="container-pagination">
        <div className="sous-container-pagination">
          <Pagination nameComponent={nameComponent}/>
        </div>
      </div>
    </div>
  );
}


