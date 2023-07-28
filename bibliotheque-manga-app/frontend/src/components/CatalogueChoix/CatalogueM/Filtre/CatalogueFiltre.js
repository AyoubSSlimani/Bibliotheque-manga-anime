import React from 'react';
import CheckboxGenre from './CheckboxGenre';
import BlockNombreChapitre from './BlockNombreChapitre';


export default function CatalogueFiltre({nameComponent}) {
  
  return (
    <div className="filtre-container">
    <BlockNombreChapitre nameComponent={nameComponent}/>
    <CheckboxGenre nameComponent={nameComponent}/>
    </div>
  );
}
