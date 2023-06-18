import React from 'react';
import '../../../../styles/CatalogueFiltre.css';
import CheckboxGenre from './CheckboxGenre';
import BlockNombreChapitre from './BlockNombreChapitre';


export default function CatalogueFiltre() {

  
  return (
    <div className="blockTrier">
      <BlockNombreChapitre/>
      <CheckboxGenre />
    </div>
  );
}
