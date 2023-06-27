import React from 'react';
import { useDispatch } from "react-redux";
import { postCollectionCards } from '../../../../actions/carte.action';
import { v4 as uuidv4 } from 'uuid';

export default function OptionCardSelector({cardId, cartes}) {
  // Dispatch Redux pour déclencher une action
  const dispatch = useDispatch();
  

  


 // Gère le clic à l'intérieur de la liste déroulante de l'option de carte
  const handleOptionClick = async (event) => {

    const selectedOption = event.target.value;
    

    if (selectedOption === 'Collection') {
      
      const postData = {
        name: cartes[cardId-1].name,
        cover: cartes[cardId-1].cover,
        genre: cartes[cardId-1].genre,
        terminer: cartes[cardId-1].terminer,
        id: uuidv4(),
      };

    dispatch(postCollectionCards(postData));
        
    } else if (selectedOption === 'PageCard') {
      window.location.href = '/PageCard'
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
