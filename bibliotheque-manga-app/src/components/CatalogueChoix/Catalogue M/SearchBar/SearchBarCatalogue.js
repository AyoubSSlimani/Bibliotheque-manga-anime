import React, { useState } from 'react';
import '../../../../styles/SearchBarCatalogue.css';
import loupe from '../../../../assets/loupe.png';



function SearchBarCatalogue({filterName, onFilterNameChange, handleTrierClick}) {
 
  
  return (
    <form className="searchBar" >
      <img src={loupe} alt="icone-loupe" width="50px" height="50px" />
      <input
        type="text"
        placeholder="RECHERCHER..."
        name="search"
        value={filterName}
        onChange={(e) => {onFilterNameChange(e.target.value)}}
      />
      <button type="submit" style={{ display: 'none' }}></button>
    </form>
  );
}

export default SearchBarCatalogue;