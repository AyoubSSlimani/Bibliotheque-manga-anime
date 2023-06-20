import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from "../../../Utils";
import { Link } from 'react-router-dom';
import '../../../../styles/ButtonOptionCard.css';
import OptionCardSelector from './OptionCardSelector';

export default function Carte() {
  // Sélectionne les données de cartes à partir du state avec useSelector
  const cartes = useSelector(state => state.carteReducer.allCards);

  // État local pour stocker l'ID de la carte sélectionnée et l'état de l'option de carte ouverte
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isOptionCardOpen, setIsOptionCardOpen] = useState(false);

  // Gère le clic sur l'icône de l'option de carte
  const handleIconeOptionCardClick = (carteId) => {
    if (selectedCardId === carteId) {
      // Si l'option est déjà ouverte pour cette carte, on la ferme en réinitialisant les états
      setSelectedCardId(null);
      setIsOptionCardOpen(false);
    } else {
      // Sinon, on ouvre l'option correspondante en mettant à jour les états
      setSelectedCardId(carteId);
      setIsOptionCardOpen(true);
    }
  };


  return (
    <div className="sous-container-card">
      {!isEmpty(cartes) && cartes.map((carte) => {
        const isSelected = selectedCardId === carte.id;
        return (
          <div key={carte.id} className="card card-carte">
            <Link to="/CatalogueManga/PageCard">
              <div className='container-image-optn'>
                <img src={carte.cover} alt={carte.name} width="150px" height="200px" />
              </div>
              <div className="ligne"></div>
              <div className="name-card">
                <h3>{carte.name}</h3>
              </div>
            </Link>
            <div className="icone-option-card" onClick={() => handleIconeOptionCardClick(carte.id)}>
              {isSelected && isOptionCardOpen && <OptionCardSelector cartes={cartes} cardId={carte.id}/>}
            </div>
          </div>
        );
      })}
    </div>
  );
};



  // import '../../../../styles/Carte.css';
// import { tabManga } from '../../../../data/DataGenre';
// import add from '../../../../assets/add.png'
// import OptionCardSelector from './OptionCardSelector';

// export default function Carte({ handleSelectChange, nbCard, handleTrierClick, currentItems, filterName, setTotalItems }) {

  // const [isDivVisible, setDivVisible] = useState(null);

  // const [selectedCardId, setSelectedCardId] = useState(null);


  // const handleButtonClick = (cardId) => {
  //   setSelectedCardId(cardId === selectedCardId ? null : cardId);
  // };

  // console.log(selectedCardId);

  // const selectRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     const optionCardSelector = document.querySelector('.option-card');
  //     if (optionCardSelector && !optionCardSelector.contains(event.target)) {
  //       setSelectedCardId(null);
  //       console.log('Clic en dehors du select');
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);


   // <div className="sous-container-card" onChange={handleSelectChange}>
    //   {currentItems.map((carte) => {
    //       return (
    //         <div key={carte.id} className="card card-carte">
    //           <div className='container-image-optn'>
    //             <img src={carte.cover}  alt={carte.name} width="150px" height="200px" />
    //             <img className='add-optn' src={add} onClick={() => handleButtonClick(carte.id) } style={{width: '20px', height: '20px'}}/>
    //             {selectedCardId === carte.id && selectedCardId !== null && (
    //             <OptionCardSelector ref={selectRef} />
    //             )}
    //           </div>
    //           <div className="ligne"></div>
    //           <div className="name-card">
    //             <h3>{carte.name}</h3>
    //           </div>
    //         </div>
    //       );
        
    //   })}
    // </div>

/* <div>
<p>{!isEmpty(cartes) && cartes.map((carte) => {
  return <span key={carte.id}>{carte.name}</span>;
})}
</p>;

</div> */