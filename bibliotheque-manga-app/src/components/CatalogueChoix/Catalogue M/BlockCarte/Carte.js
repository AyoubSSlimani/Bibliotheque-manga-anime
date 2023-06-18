import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {isEmpty} from "../../../Utils"

export default function Carte() {

  const cartes = useSelector(state => state.carteReducer);

  return (
 

  <div className="sous-container-card" >
      {!isEmpty(cartes) && cartes.map((carte) => {
            return (
              <div key={carte.id} className="card card-carte">
                <div className='container-image-optn'>
                  <img src={carte.cover}  alt={carte.name} width="150px" height="200px" />                
                </div>
                <div className="ligne"></div>
                <div className="name-card">
                  <h3>{carte.name}</h3>
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