import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getCardData, postCollectionCards } from '../../../../actions/carte.action';
import CardPage from './CardPage';
import { Navigate, useNavigate } from 'react-router';

export default function OptionCardSelector({cardId, cartes, cardTitle}) {
  // Dispatch Redux pour déclencher une action
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carte = cartes.find(carte => carte.mal_id === cardId);
  const carteTitle = cardTitle;

 // Gère le clic à l'intérieur de la liste déroulante de l'option de carte
  const handleOptionClick = async (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'Collection') {
      if (carte) {
        const modifiedCard = {...carte, mal_id: "customCard" + carte.mal_id.toString()};
        dispatch(postCollectionCards(modifiedCard));
    } else {
      return <div>Carte Introuvable</div>
    }
    } else if (selectedOption === 'PageCard') {
        dispatch(getCardData(carte));
        navigate(`/Catalogue-manga/${carteTitle}`);
      
    }
  
};


  return (
    <div className='option-card-selector' >
      <select
        key={cardId}
        name="selector"
        className="option-deffilement selector"
        onClick={(e) => handleOptionClick(e) }
        size="2"
      >
        <option value="Collection">Ajouter à ma collection</option>
        <option value="PageCard">Afficher la carte</option>
      </select>
      
    </div>
  );
};
