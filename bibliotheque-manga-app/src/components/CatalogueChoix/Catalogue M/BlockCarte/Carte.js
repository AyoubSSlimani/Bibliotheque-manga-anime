import React from 'react';
import '../../../../styles/Carte.css';
import { tabManga } from '../../../../data/DataGenre';

export default function Carte({ handleSelectChange, nbCard, handleTrierClick, currentItems, filterName, setTotalItems }) {


  return (
    <div className="sous-container-card" onChange={handleSelectChange}>
      {currentItems.map((manga) => {
          return (
            <div key={manga.id} className="card card-manga">
              <img src={manga.cover} alt={manga.name} width="150px" height="200px" />
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
