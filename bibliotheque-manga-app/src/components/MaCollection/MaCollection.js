import React, {useState } from 'react'
import '../../styles/MaCollection.css'
import Carte from '../CatalogueChoix/Carte';
import '../../styles/Carte.css'
import loupe from '../../assets/loupe.png'
import MaCollectionFiltre from './MaCollectionFiltre';
import MaCollectionSearchBar from './MaCollectionSearchBar';
import Newpage from './Newpage';

export default function MaCollection() {

    const [isFiltreVisible, setFiltreVisible] = useState(false);
    //const [isSearchBarVisible, setSearchBarVisible] = useState(false);

    const [showWindow, setShowWindow] = useState(false);
    const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

    const handleIconClick = (event) => {
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
    

    const nbCard = 10;

    const tabCards = [];
    for(let i=0; i < nbCard; i++){
        tabCards.push(<Carte key={i}></Carte>);
    }

    // PERMET DE CREER UNE NOUVELLE PAGE A CHAQUE CLIC SUR "NEWPAGE +"
    
    
    
    
    
    // PERMET DE MONTRER SUR QUELLE PAGE ON EST 
    
    // const handleCurrentPageClick = (event) => { 
    //     event.target.classList.add('current-button-underline');
        
    // }

     const changeClass = (event) => {
        let secondTarget = '';
        



        };

       
      };

      
    


  return (
    <div className='container'>
        <div className='container-ma-collection'>

            <div className='option-menu'>
                <div className='title-menu-left'>
                    <div className={`all button-title button-underlin blabla`} onClick={changeClass}>
                        All
                    
                    <Newpage changeClass={changeClass}/>
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
