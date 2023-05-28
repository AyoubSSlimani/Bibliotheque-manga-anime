import React, { useState } from 'react';
import '../../../../styles/CatalogueFiltre.css';
import CheckboxGenre from './CheckboxGenre';
import BlockNombreChapitre from './BlockNombreChapitre';
import Trier from './Trier';
import { tabGenre } from '../../../../data/DataGenre.js';


export default function CatalogueFiltre() {
     const tabManga = [
        {id:1 ,name: "Naruto", genre: ["Action", "Aventure"], terminer: true},
        {id:2 ,name: "One Piece", genre: ["Action", "Aventure"],  terminer: false},
        {id:3 ,name: "Grand Blue", genre: ["Comédie", "Aventure"], terminer: false},
        {id:4 ,name: "Naruto", genre: ["Action", "Aventure"], terminer: true},
        {id:5 ,name: "One Piece", genre: ["Action", "Aventure"],  terminer: false},
        {id:6 ,name: "Grand Blue", genre: ["Comédie", "Aventure"], terminer: false},
    
    ]


  const [checked, setChecked] = useState(() => {
    const initialCheckedState = {};
    tabGenre.forEach((genre) => {
      initialCheckedState[genre] = false;
    });
    return initialCheckedState;
  });

  const handleCheckboxChange = (genre) => {
    setChecked((prevState) => ({
      ...prevState,
      [genre]: !prevState[genre]
    }));
   
  };

  const handleUncheckAll = () => {
    setChecked((prevState) => {
      const updatedChecked = { ...prevState };
      tabGenre.forEach((genre) => {
        updatedChecked[genre] = false;
      });
      return updatedChecked;
    });
   
  };



  return (
    <div className="blockTrier">
      <BlockNombreChapitre />
      <CheckboxGenre checked={checked} onCheckboxChange={handleCheckboxChange} onUncheckAll={handleUncheckAll} />
      <div className="petitContainer3">
        <Trier checked={checked} tabManga={tabManga}/>
      </div>
    </div>
  );
}
