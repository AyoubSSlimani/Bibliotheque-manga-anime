import React, { useState } from 'react';
import '../../../../styles/SearchBarCatalogue.css';
import loupe from '../../../../assets/loupe.png';



function SearchBarCatalogue({handleSearchSubmit, handleSearchChange, searchText}) {

  
  return (
    <form className="searchBar" onSubmit={handleSearchSubmit}>
      <img src={loupe} alt="icone-loupe" width="50px" height="50px" />
      <input
        type="text"
        placeholder="RECHERCHER..."
        name="search"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button type="submit" style={{ display: 'none' }}></button>
    </form>
  );
}

export default SearchBarCatalogue;
