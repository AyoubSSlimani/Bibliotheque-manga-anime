import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCollectionCards, getOneCard, postCollectionCards } from '../../../../actions/carte.action';


export default function OptionCardSelector({cardId, cartes}) {
  // Dispatch Redux pour déclencher une action
  const dispatch = useDispatch();
  

  const form = useRef();
 console.log(cardId);
  console.log(cartes[cardId-1].name);

 // Gère le clic à l'intérieur de la liste déroulante de l'option de carte
  const handleOptionClick = async (event) => {

    const selectedOption = event.target.value;
    

    if (selectedOption === 'Collection') {
      console.log("collection");
      const postData = {
        name: cartes[cardId-1].name,
        type: cartes[cardId-1].type
      };

    dispatch(postCollectionCards(postData));
        
    } else if (selectedOption === 'PageCard') {
      console.log("wesh");
    }
  
};


  return (
    <div className='option-card-selector' >
      <select
        key={cardId}
        name="selector"
        className="option-deffilement selector"
        ref={form}
        onClick={(e) => handleOptionClick(e) }
        size="2"
      >
        <option value="Collection">Ajouter à ma collection</option>
        <option value="PageCard">Afficher la carte</option>
      </select>
    </div>
  );
};
