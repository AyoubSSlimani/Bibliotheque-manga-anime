import React from 'react';
import '../../../../styles/SearchBarCatalogue.css';
import loupe from '../../../../assets/loupe.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsBySearch } from '../../../../actions/filtres.action';





function SearchBarCatalogue() {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.carteReducer.searchText);
  

  const handleSearchChange = (e) => {
    const searchText = e.target.value
    dispatch(getCardsBySearch(searchText)); 
  }

  
  return (
    <form className="searchBar" >
      <img src={loupe} alt="icone-loupe" width="50px" height="50px" />
      <input
        type="text"
        placeholder="RECHERCHER..."
        name="search"
        value={searchValue}
        onChange={(e) => {handleSearchChange(e)}}
      />
      <button type="submit" style={{ display: 'none' }}></button>
    </form>
  );
}

export default SearchBarCatalogue;