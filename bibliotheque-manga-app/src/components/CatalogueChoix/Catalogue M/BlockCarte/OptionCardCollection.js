import React from 'react';
import { useDispatch } from "react-redux";
import { deleteCollectionCards } from '../../../../actions/carte.action';
import { v4 as uuidv4 } from 'uuid';

export default function OptionCardCollection({cardId}) {
  // Dispatch Redux pour déclencher une action
  const dispatch = useDispatch();
  

    

  return (
    <div className='option-card-selector' >
      <select
        key={cardId}
        name="selector"
        className="option-deffilement selector"
        size="2"
      >
        <option value="Supprimer" onClick={() => dispatch(deleteCollectionCards(cardId))}>Supprimer</option>
        <option value="PageCard">Afficher la carte</option>
      </select>
    </div>
  );
};
