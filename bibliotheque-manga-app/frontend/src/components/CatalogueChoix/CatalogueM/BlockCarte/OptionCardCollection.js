import React from 'react';
import { useDispatch } from "react-redux";
import { deleteCollectionCards } from '../../../../actions/carte.action';
import { Link, useNavigate } from 'react-router-dom';

export default function OptionCardCollection({cardId}) {
  // Dispatch Redux pour déclencher une action
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='option-card-selector' >
      <select
        key={cardId}
        name="selector"
        className="option-deffilement selector"
        size="2"
      >
        <option value="Supprimer" onClick={() => dispatch(deleteCollectionCards(cardId))}>Supprimer</option>
        <option value="PageCard" onClick={() => navigate(`/Ma-collection/${cardId}`)}>Afficher la carte</option>
      </select>
    </div>
  );
};
