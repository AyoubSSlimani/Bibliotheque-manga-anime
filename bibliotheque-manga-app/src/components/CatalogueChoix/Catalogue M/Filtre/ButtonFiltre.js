import React, { useState } from 'react';
import CatalogueFiltre from './CatalogueFiltre';
import '../../../../styles/ButtonFiltre.css';
import BlockNombreChapitre from './BlockNombreChapitre';


export default function ButtonFiltre({
  checked, onCheckboxChange, onUncheckAll, checkedTerminer, handleTerminerChange, handleSearchSubmit, handleSearchChange, searchText
}) {
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
        checkedTerminer={checkedTerminer}
        handleTerminerChange={handleTerminerChange}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        searchText={searchText}
          
        />
      )}
    </div>
  );
}