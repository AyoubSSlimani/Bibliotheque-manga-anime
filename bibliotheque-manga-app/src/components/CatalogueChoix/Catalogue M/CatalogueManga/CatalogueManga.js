import React from 'react'
import SearchBarCatalogue from '../SearchBar/SearchBarCatalogue'
import CatalogueFiltre from '../Filtre/CatalogueFiltre'
import Carte from '../BlockCarte/Carte'
import BlockCarte from '../BlockCarte/BlockCarte'
import Pagination from '../Pagination/Pagination'
import { useState } from 'react'
import '../../../../styles/Carte.css'
import '../../../../styles/CatalogueManga.css'
import ButtonFiltre from '../Filtre/ButtonFiltre'


export default function CatalogueManga() {
  const [nbCard, setNbCard] = useState(12);

  const handleSelectChange = (event) => {
    const newValue = parseInt(event.target.value, 10); // Convertir la valeur en nombre entier
    setNbCard(newValue);}


  // const tabCards = [];
  // for(let i=0; i < nbCard; i++){
  //   tabCards.push(<Carte key={i}></Carte>);
  // }

  
  
  // console.log(tabCards);

  

  

  return (
    <div className='container'>
      <h1>Catalogue Manga</h1>
      <SearchBarCatalogue></SearchBarCatalogue>
      <div className='button-filtre-component'>
        <ButtonFiltre></ButtonFiltre>
      </div>
      <div className='blockCarteManga'>
        <BlockCarte nbCard={nbCard}  handleSelectChange={handleSelectChange}/>
        <div className="container-card">
          {/* {tabCards}   */}
          <Carte></Carte>
        </div>
      </div>
      <div classNameName="container-pagination">
            <div className="sous-container-pagination">
              <Pagination></Pagination>
            </div>
      </div>
    </div>
  )
}

