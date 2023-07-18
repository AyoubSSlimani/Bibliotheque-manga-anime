import React from 'react';
import '../../../../styles/CatalogueFiltre.css';
import CheckboxGenre from './CheckboxGenre';
import BlockNombreChapitre from './BlockNombreChapitre';


export default function CatalogueFiltre({nameComponent}) {
  
  return (
    <div className="blockTrier">
      <BlockNombreChapitre nameComponent={nameComponent}/>
      <CheckboxGenre nameComponent={nameComponent}/>
    </div>
  );
}
