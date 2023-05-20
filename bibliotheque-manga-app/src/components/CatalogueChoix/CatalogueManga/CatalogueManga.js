import React from 'react'
import SearchBarCatalogue from '../SearchBarCatalogue'
import CatalogueFiltre from '../CatalogueFiltre'
import Carte from '../Carte'
import BlockCarte from '../BlockCarte'
import Pagination from '../Pagination'
import { useState } from 'react'
import '../../../styles/Carte.css'

export default function CatalogueManga() {
  const [nbCard, setNbCard] = useState(12);

  const handleSelectChange = (event) => {
    const newValue = parseInt(event.target.value, 10); // Convertir la valeur en nombre entier
    setNbCard(newValue);}

  console.log(nbCard);

  const tabCards = [];
  for(let i=0; i < nbCard; i++){
    tabCards.push(<Carte key={i}></Carte>);
  }

  

  return (
    <div>
      <h1>Catalogue Manga</h1>
      <SearchBarCatalogue></SearchBarCatalogue>
      <CatalogueFiltre></CatalogueFiltre>
      <div className='blockCarteManga'>
        <BlockCarte nbCard={nbCard} handleSelectChange={handleSelectChange}/>
        <div className="container-card">
          {tabCards}  
        </div>
      </div>
      <Pagination></Pagination>
    </div>
  )
}

