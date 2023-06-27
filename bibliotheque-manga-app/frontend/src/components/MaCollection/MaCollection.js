import React, { useEffect, useState } from 'react';
import '../../styles/MaCollection.css';
import Carte from '../CatalogueChoix/CatalogueM/BlockCarte/Carte';
import '../../styles/Carte.css';
import loupe from '../../assets/loupe.png';
import MaCollectionFiltre from './MaCollectionFiltre';
import MaCollectionSearchBar from './MaCollectionSearchBar';
import Newpage from './Newpage';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionCards } from '../../actions/carte.action';
import OptionCardCollection from '../CatalogueChoix/CatalogueM/BlockCarte/OptionCardCollection';

export default function MaCollection() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollectionCards());
  }, []);

  const collectionCards = useSelector(state => state.carteReducer.collectionCardsGet);


  // État local pour stocker l'ID de la carte sélectionnée et l'état de l'option de carte ouverte
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isOptionCardOpen, setIsOptionCardOpen] = useState(false);

  // Gère le clic sur l'icône de l'option de carte
  const handleIconeOptionCardClick = (carteId) => {
    if (selectedCardId === carteId) {
      // Si l'option est déjà ouverte pour cette carte, on la ferme en réinitialisant les états
      setSelectedCardId(null);
      setIsOptionCardOpen(false);
    } else {
      // Sinon, on ouvre l'option correspondante en mettant à jour les états
      setSelectedCardId(carteId);
      setIsOptionCardOpen(true);
    }
  };
  
  const [isFiltreVisible, setFiltreVisible] = useState(false);
  const [showWindow, setShowWindow] = useState(false);

  const handleIconClick = (event) => {
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


  return (
    <div className='container'>
      <div className='container-ma-collection'>
        <div className='option-menu'>
          <div className='title-menu-left'>
            <div className='page-all'>
              <h3>All</h3>
            </div>
            <Newpage />
          </div>

          <div className='title-menu-right'>
            <button className='button-filter' onClick={handleButtonClick}>
              Filtrer
            </button>
            <button onClick={handleIconClick}>
              <img src={loupe} className='loupe' alt='rechercher' width='50px' height='50px' />
            </button>
            {showWindow && (
              <div className='window'>
                <MaCollectionSearchBar></MaCollectionSearchBar>
                <button onClick={handleCloseWindow}>Fermer</button>
              </div>
            )}
          </div>
        </div>

        {isFiltreVisible && <MaCollectionFiltre></MaCollectionFiltre>}
        
        
        <div className='container-card-ma-collection'>
          <div className='sous-container-card-ma-collection'>
            {collectionCards.length > 0 ?
            <div className="sous-container-card">
            {collectionCards.map((carte) => {
              const isSelected = selectedCardId === carte.id;
              return (
                <div key={carte.id} className="card card-carte">
                  <Link to="/PageCard">
                    <div className='container-image-optn'>
                      <img src={carte.cover} alt={carte.name} width="150px" height="200px" />
                    </div>
                    <div className="ligne"></div>
                    <div className="name-card">
                      <h3>{carte.name}</h3>
                    </div>
                  </Link>
                  <div className="icone-option-card" onClick={() => handleIconeOptionCardClick(carte.id)}>
                    {isSelected && isOptionCardOpen && <OptionCardCollection cardId={carte.id}/>}
                  </div>
                </div>
              );
            })};
          </div>
            
            : 
            <p>
              Vous n'avez pas encore ajouté d'œuvre à votre collection.
              Pour en ajouter aller dans <Link to="/Catalogue-choix" className='catalogue-link'>Catalogue</Link>
            </p>  }
            
          </div>
        </div>
      </div>
    </div>
  );
};