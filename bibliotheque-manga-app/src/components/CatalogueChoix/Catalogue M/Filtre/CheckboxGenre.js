import React from 'react';
import { tabGenre } from '../../../../data/DataGenre.js';
import '../../../../styles/CheckboxGenre.css';

export default function CheckboxGenre({ checked, onCheckboxChange, onUncheckAll }) {
  return (
    <div className="container-genre">
      <div className="sous-container-genre">
        {tabGenre.map((genre, index) => (
          <div key={index} className={genre}>
            <input
              type="checkbox"
              checked={checked[genre] || false}
              onChange={() => onCheckboxChange(genre)}
            />
            <p>{genre}</p>
          </div>
        ))}
      </div>
      <button onClick={onUncheckAll}>Décocher tout</button>
    </div>
    
  );

}