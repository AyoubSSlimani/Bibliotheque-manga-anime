import React, { useState, useRef, useEffect } from 'react';
import '../../../../styles/Carte.css';
import { tabManga } from '../../../../data/DataGenre';
import add from '../../../../assets/add.png'
import OptionCardSelector from './OptionCardSelector';

export default function Carte({ handleSelectChange, nbCard, handleTrierClick, currentItems, filterName, setTotalItems }) {

  const [isDivVisible, setDivVisible] = useState(null);

  const [selectedCardId, setSelectedCardId] = useState(null);


  const handleButtonClick = (cardId) => {
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
  };

  console.log(selectedCardId);

  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const optionCardSelector = document.querySelector('.option-card');
      if (optionCardSelector && !optionCardSelector.contains(event.target)) {
        setSelectedCardId(null);
        console.log('Clic en dehors du select');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  

  return (
    <div className="sous-container-card" onChange={handleSelectChange}>
      {currentItems.map((manga) => {
          return (
            <div key={manga.id} className="card card-manga">
              <div className='container-image-optn'>
                <img src={manga.cover}  alt={manga.name} width="150px" height="200px" />
                <img className='add-optn' src={add} onClick={() => handleButtonClick(manga.id) } style={{width: '20px', height: '20px'}}/>
                {selectedCardId === manga.id && selectedCardId !== null && (
                <OptionCardSelector ref={selectRef} />
                )}
              </div>
              <div className="ligne"></div>
              <div className="name-card">
                <h3>{manga.name}</h3>
              </div>
            </div>
          );
        
      })}
    </div>
  );
}
