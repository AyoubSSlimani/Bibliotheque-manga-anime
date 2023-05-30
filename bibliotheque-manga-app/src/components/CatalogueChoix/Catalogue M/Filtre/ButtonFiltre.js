import React, { useState } from 'react';
import CatalogueFiltre from './CatalogueFiltre';
import '../../../../styles/ButtonFiltre.css';


export default function ButtonFiltre({checked, onCheckboxChange, onUncheckAll}) {
    const [isDivVisible, setDivVisible] = useState(false);


    const handleButtonClick = () => {
      if (!isDivVisible) {
        setDivVisible(true);
      } else {
        setDivVisible(false);
      }
    };



  return (
    <div className='button-filtre'>
      <button onClick={handleButtonClick}>Filtrer</button>
      {isDivVisible && (
        <CatalogueFiltre
        checked={checked} 
        onCheckboxChange={onCheckboxChange} 
        onUncheckAll={onUncheckAll}
          
        />
      )}
    </div>
  );
}