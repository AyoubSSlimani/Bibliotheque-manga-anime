import React, { useState } from 'react';
import '../../styles/MaCollection.css';
import Carte from '../CatalogueChoix/Catalogue M/BlockCarte/Carte';
import '../../styles/Carte.css';
import loupe from '../../assets/loupe.png';
import MaCollectionFiltre from './MaCollectionFiltre';
import MaCollectionSearchBar from './MaCollectionSearchBar';
import Newpage from './Newpage';
import { Link } from 'react-router-dom';

export default function MaCollection() {
  const [isFiltreVisible, setFiltreVisible] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

  const handleIconClick = (event) => {
    const { clientX, clientY } = event;
    setWindowPosition({ x: clientX, y: clientY });
    setShowWindow(true);
  };

  const handleCloseWindow = () => {
    setShowWindow(false);
  };

  const handleButtonClick = () => {
    if (!isFiltreVisible) {
      setFiltreVisible(true);
    } else {
      setFiltreVisible(false);
    }
  };

  const nbCard = 10;
  const tabCards = [];
  for (let i = 0; i < nbCard; i++) {
    tabCards.push(<Carte key={i}></Carte>);
  }

  let otherElement = null;

function changeClass(event) {
  const clickedElement = event.target; // Élément cible cliqué

  // Ajouter une classe à l'élément cible cliqué
  clickedElement.classList.add('blabla');

  // Vérifier si otherElement est défini et supprimer la classe
  if (otherElement) {
    otherElement.classList.remove('blabla');
  }

  // Mettre à jour la valeur de otherElement avec la nouvelle cible
  otherElement = clickedElement;
}
    ;

  return (
    <div className='container'>
      <div className='container-ma-collection'>
        <div className='option-menu'>
          <div className='title-menu-left'>
            <div className='all button-title button-underline blabla' onClick={changeClass}>
              All
            </div>
            <Newpage changeClass={changeClass} />
          </div>

          <div className='title-menu-right'>
            <button className='button-filter' onClick={handleButtonClick}>
              Filtrer
            </button>
            <button onClick={handleIconClick}>
              <img src={loupe} className='loupe' alt='rechercher' width='50px' height='50px' />
            </button>
            {showWindow && (
              <div className='window' style={{ left: windowPosition.x, top: windowPosition.y }}>
                <MaCollectionSearchBar></MaCollectionSearchBar>
                <button onClick={handleCloseWindow}>Fermer</button>
              </div>
            )}
          </div>
        </div>

        {isFiltreVisible && <MaCollectionFiltre></MaCollectionFiltre>}
        
        <div className='container-card-ma-collection'>
          <div className='sous-container-card-ma-collection'>
            <p>
              Vous n'avez pas encore ajouté d'œuvre à votre collection.
              Pour en ajouter aller dans <Link to="/Catalogue-choix" className='catalogue-link'>Catalogue</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};