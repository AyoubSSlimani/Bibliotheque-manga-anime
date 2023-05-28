import React from 'react';
import '../../../../styles/SearchBarCatalogue.css';
import loupe from '../../../../assets/loupe.png';



function SearchBarCatalogue() {

  


  const handleSubmit = (event) => {
    event.preventDefault();
    const searchText = event.target.elements.search.value;
    event.target.reset();
    console.log(searchText)
  };
  
  
  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <img src={loupe} alt="icone-loupe" width="50px" height="50px" />
      <input
        type="text"
        placeholder="RECHERCHER..."
        name="search"
      />
      <button type="submit" style={{ display: 'none' }}></button>
    </form>
  );
}

export default SearchBarCatalogue;
