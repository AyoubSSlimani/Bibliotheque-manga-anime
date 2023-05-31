import React, { useState } from 'react';
import '../../../../styles/CatalogueFiltre.css';
import CheckboxGenre from './CheckboxGenre';
import BlockNombreChapitre from './BlockNombreChapitre';


export default function CatalogueFiltre({checked, onCheckboxChange, onUncheckAll, checkedTerminer, handleTerminerChange }) {

  
  return (
    <div className="blockTrier">
      <BlockNombreChapitre checked={checked} onCheckboxChange={onCheckboxChange} onUncheckAll={onUncheckAll} checkedTerminer={checkedTerminer}
        handleTerminerChange={handleTerminerChange}  />
      <CheckboxGenre checked={checked} onCheckboxChange={onCheckboxChange} onUncheckAll={onUncheckAll} />
    </div>
  );
}
