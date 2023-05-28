import React from 'react'
import '../../../../styles/Carte.css'
import ImageManga from '../../../../assets/A_l_Aube_d_une_grande_aventure_One_Piece_tome_1-361143691.jpg'
import ButtonOptionCard from './ButtonOptionCard'
import { tabManga } from '../../../../data/DataGenre'

export default function Carte({handleSelectChange, nbCard}) {

  const sliceData = tabManga.slice(0, nbCard);

  const mangaCard = sliceData.map((manga) => (
      <div key={manga.id} className='card card-manga'>
        <img src={manga.cover} alt={manga.name} width="150px" height="200px" />
        <div className="ligne"></div>
        <div className="name-card">
          <h3>{manga.name}</h3>
        </div>
      </div>
    ))

    
  
  return (
      <div className='sous-container-card' onChange={handleSelectChange}>
        {mangaCard}
      </div>

    
    // <div className="card card-manga">
    //     <img src={ImageManga} alt="manga-one-piece" width="150px" height="200px"/>
    //     <img src="" alt=""/>
    //     <div className="ligne"></div>
    //     <div className="name-card">
    //         <h4>Nom</h4>
    //     </div>

    //     <ButtonOptionCard />
    // </div>
  )
}
