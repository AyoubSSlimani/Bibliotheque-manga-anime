import React from 'react';
import '../../styles/SearchBarCatalogue.css'
import loupe from '../../assets/loupe.png'

function SearchBarCatalogue(){
    return(
        <div className="searchBar">
                <img src={loupe} alt="icone-loupe" width="50px" height="50px"/>
                <input type="text" name="" id="" placeholder="RECHERCHER..."/>
        </div>
    );
}

export default SearchBarCatalogue