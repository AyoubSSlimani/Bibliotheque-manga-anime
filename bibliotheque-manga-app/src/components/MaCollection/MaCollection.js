import React, {useState } from 'react'
import '../../styles/MaCollection.css'
import Carte from '../CatalogueChoix/Carte';
import '../../styles/Carte.css'
import buttonPlus from '../../assets/btn-plus.png'
import loupe from '../../assets/loupe.png'
import MaCollectionFiltre from './MaCollectionFiltre';
import MaCollectionSearchBar from './MaCollectionSearchBar';

export default function MaCollection() {

    const [isFiltreVisible, setFiltreVisible] = useState(false);
    //const [isSearchBarVisible, setSearchBarVisible] = useState(false);

    const [showWindow, setShowWindow] = useState(false);
    const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

    const handleIconClick = (event) => {
        // Récupère la position de l'icône cliquée
        const { clientX, clientY } = event;
        setWindowPosition({ x: clientX, y: clientY });
        setShowWindow(true);
      };

    const handleCloseWindow = () => {
    setShowWindow(false);
    };


    const handleButtonClick = () => {
        if(!isFiltreVisible){
            setFiltreVisible(true);
        } else {
            setFiltreVisible(false);
        }
    }

    // const handleSearchBarClick = () => {
    //     if(!isSearchBarVisible){
    //         setSearchBarVisible(true);
    //     } else {
    //         setSearchBarVisible(false);
    //     }
    // }

    const nbCard = 10;

    const tabCards = [];
    for(let i=0; i < nbCard; i++){
        tabCards.push(<Carte key={i}></Carte>);
    }
  return (
    <div className='container'>
        <div className='container-ma-collection'>

            <div className='option-menu'>
                <div className='title-menu-left'>
                    <h3 className='button-title'>All</h3>
                    <div className='new-page button-title'>
                        <h3 className='' >New Page</h3>
                        <img src={buttonPlus} className='icon-add' alt="ajouter" width="30px" height="30px" />
                    </div>
                </div>

                <div className='title-menu-right'>
                    <button className='button-filter' onClick={handleButtonClick}>Filtrer</button>
                    <button onClick={handleIconClick} >
                        <img src={loupe} className='loupe' alt="rechercher" width="50px" height="50px"/>
                    </button>
                    {showWindow && (
                <div
                    className="window"
                    style={{ left: windowPosition.x, top: windowPosition.y }}
                    >
                    {<MaCollectionSearchBar></MaCollectionSearchBar>}
                    <button onClick={handleCloseWindow}>Fermer</button>
                    </div>
                )}
                </div>
            </div>

            {isFiltreVisible && <MaCollectionFiltre></MaCollectionFiltre>}

            <div className='container-card-ma-collection'>
                <div className='sous-container-card-ma-collection'>
                    {tabCards}
                </div>
            </div>
        </div>
    </div>

  )
}
