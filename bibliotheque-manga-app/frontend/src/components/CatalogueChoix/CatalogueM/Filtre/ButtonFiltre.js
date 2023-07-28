import React, { useState } from 'react';
import CatalogueFiltre from './CatalogueFiltre';
import BlockNombreChapitre from './BlockNombreChapitre';


export default function ButtonFiltre({nameComponent}) {
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
        <CatalogueFiltre nameComponent={nameComponent}/>
      )}
    </div>
  );
}