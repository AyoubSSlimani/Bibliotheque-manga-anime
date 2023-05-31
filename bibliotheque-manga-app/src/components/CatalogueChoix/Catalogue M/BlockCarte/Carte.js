import React from 'react'
import '../../../../styles/Carte.css'

export default function Carte({handleSelectChange, nbCard, handleTrierClick, currentItems}) {

  // console.log(handleTrierClick());
  // const sliceData = handleTrierClick().slice(0, nbCard);
  // const sliceData2 = handleTrierClick().slice(nbCard);
  // console.log(sliceData);
  // console.log(sliceData2);


  
  return (
      <div className='sous-container-card' onChange={handleSelectChange}>
        {currentItems.map((manga) => 
          <div key={manga.id} className='card card-manga'>
            <img src={manga.cover} alt={manga.name} width="150px" height="200px" />
            <div className="ligne"></div>
            <div className="name-card">
                <h3>{manga.name}</h3>
              </div>
          </div>)}
      </div>
  )
}
