import React, { useState } from 'react';
import '../../../../styles/CatalogueFiltre.css';
import CheckboxGenre from './CheckboxGenre';
import BlockNombreChapitre from './BlockNombreChapitre';


export default function CatalogueFiltre({checked, onCheckboxChange, onUncheckAll }) {

  
  return (
    <div className="blockTrier">
      <BlockNombreChapitre />
      <CheckboxGenre checked={checked} onCheckboxChange={onCheckboxChange} onUncheckAll={onUncheckAll} />
    </div>
  );
}
