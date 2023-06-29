import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from "../../../Utils";
import { Link } from 'react-router-dom';
import '../../../../styles/OptionCardSelector.css';
import OptionCardSelector from './OptionCardSelector';

export default function Carte() {
  // Sélectionne les données de cartes à partir du state avec useSelector
  const cartes = useSelector(state => state.carteReducer.allCards);


  // État local pour stocker l'ID de la carte sélectionnée et l'état de l'option de carte ouverte
  const [selectedCardId, setSelectedCardId] = useState(null);

  // Gère le clic sur l'icône de l'option de carte
  // Utilise setSelectedCardId pour mettre à jour l'ID de la carte sélectionnée
  // Si l'ID de la carte sélectionnée correspond à celle qui a été cliquée, on la désélectionne en mettant l'ID à null
  // Sinon, on sélectionne la carte en mettant à jour l'ID avec celui de la carte cliquée
  const handleIconeOptionCardClick = (carteId) => {
    setSelectedCardId(prevCardId => prevCardId === carteId ? null : carteId);
  };

  return (
    <div className="sous-container-card">
      {!isEmpty(cartes) && cartes.map((carte) => {
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

