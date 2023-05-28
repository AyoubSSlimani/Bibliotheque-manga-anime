import React, { useState } from 'react'
import SearchBarCatalogue from '../SearchBar/SearchBarCatalogue'
import CatalogueFiltre from '../Filtre/CatalogueFiltre'
import Carte from '../BlockCarte/Carte'
import BlockCarte from '../BlockCarte/BlockCarte'
import Pagination from '../Pagination/Pagination'
import '../../../../styles/Carte.css'
import '../../../../styles/CatalogueManga.css'
import ButtonFiltre from '../Filtre/ButtonFiltre'


export default function CatalogueManga() {
  const [nbCard, setNbCard] = useState(12);
  const [isDivVisible, setDivVisible] = useState(false);


  const handleSelectChange = (event) => {
    const newValue = parseInt(event.target.value, 10); // Convertir la valeur en nombre entier
    setNbCard(newValue);}


  // const tabCards = [];
  // for(let i=0; i < nbCard; i++){
  //   tabCards.push(<Carte key={i}></Carte>);
  // }

  
  
    // console.log(tabCards);

    const handleButtonClick = () => {
        if(!isDivVisible){
            setDivVisible(true);
        } else {
            setDivVisible(false);
        }
    }
  

  

  return (
    <div className='container'>
      <h1>Catalogue Manga</h1>
      <SearchBarCatalogue></SearchBarCatalogue>
      <div className='button-filtre-component'>
        <ButtonFiltre handleButtonClick={handleButtonClick}></ButtonFiltre>
        {isDivVisible && <CatalogueFiltre></CatalogueFiltre>}
      </div>
      <div className='blockCarteManga'>
        <BlockCarte nbCard={nbCard}  handleSelectChange={handleSelectChange}/>
        <div className="container-card">
          <Carte nbCard={nbCard} handleSelectChange={handleSelectChange}></Carte>
        </div>
      </div>
      <div classNameName="container-pagination">
            <div className="sous-container-pagination">
              <Pagination nbCard={nbCard}></Pagination>
            </div>
      </div>
    </div>
  )
}

