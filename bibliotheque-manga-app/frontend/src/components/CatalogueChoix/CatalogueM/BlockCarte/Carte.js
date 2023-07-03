import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from "../../../Utils";
import { Link } from 'react-router-dom';
import '../../../../styles/OptionCardSelector.css';
import OptionCardSelector from './OptionCardSelector';
import { getCards } from '../../../../actions/carte.action';

export default function Carte() {
  // Sélectionne les données de cartes à partir du state avec useSelector
  const dispatch = useDispatch();

  const pagination = useSelector(state => state.carteReducer.paginationAllCards);
  const currentPage = pagination.current_page; 
  const cartes = useSelector(state => state.carteReducer.allCards);
  const nbCard = useSelector(state => parseInt(state.carteReducer.nbCard));
 
  const [selectedCardId, setSelectedCardId] = useState(null);

  
  const handleIconeOptionCardClick = (carteId) => {
    setSelectedCardId(prevCardId => prevCardId === carteId ? null : carteId);
  };

  const startIndex = (currentPage - 1) * nbCard;
  const endIndex = startIndex + nbCard;
  

  return (
    <div className="sous-container-card">
      {!isEmpty(cartes) && cartes.slice(startIndex,endIndex).map((carte) => {
        const isSelected = selectedCardId === carte.mal_id;
        return (
          <div key={carte.mal_id} className="card card-carte">
            <Link to="/PageCard">
              <div className='container-image-optn'>
                <img src={carte.images.jpg.image_url} alt={carte.title} width="150px" height="200px" />
              </div>
              <div className="ligne"></div>
              <div className="name-card">
                <h3>{carte.title}</h3>
              </div>
            </Link>
            <div className="icone-option-card" onClick={() => handleIconeOptionCardClick(carte.mal_id)}>
              {isSelected && <OptionCardSelector cartes={cartes} cardId={carte.mal_id}/>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

