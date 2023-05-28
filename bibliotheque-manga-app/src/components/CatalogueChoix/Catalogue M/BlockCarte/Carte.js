import React from 'react'
import '../../../../styles/Carte.css'
import ButtonOptionCard from './ButtonOptionCard'
import { tabManga } from '../../../../data/DataGenre'

export default function Carte({handleSelectChange, nbCard}) {

  const sliceData = tabManga.slice(0, nbCard);

<<<<<<< HEAD
  const mangaCard = sliceData.map((manga) => (
      <div key={manga.id} className='card card-manga'>
        <img src={manga.cover} alt={manga.name} width="150px" height="200px" />
        <div className="ligne"></div>
        <div className="name-card">
          <h3>{manga.name}</h3>
        </div>
      </div>
    ))
=======
  const tabManga = [
    {id:1 ,name: 'Naruto', genre: ['Action', 'Aventure'], terminer: true},
    {id:2 ,name: 'One Piece', genre: ['Action', 'Aventure'],  terminer: false},
    {id:3 ,name: 'Grand Blue', genre: ['Comédie', 'Aventure'], terminer: false},
    {id:4 ,name: 'Naruto', genre: ['Action', 'Aventure'], terminer: true},
    {id:5 ,name: 'One Piece', genre: ['Action', 'Aventure'],  terminer: false},
    {id:6 ,name: 'Grand Blue', genre: ['Comédie', 'Aventure'], terminer: false},

]
>>>>>>> ali

    
  
  return (
      <div className='sous-container-card' onChange={handleSelectChange}>
        {mangaCard}
      </div>

<<<<<<< HEAD
=======
    <div card card-manga>
      {tabManga.map((manga) => (
        <div className={manga.name}>
          <div className={manga.genre}></div>
          <h3>{manga.name}</h3>
          <img src={manga.image} alt={manga.name} />
          {/* Affichez les autres informations du manga */}
        </div>
      ))}
    </div>
>>>>>>> ali
    
    // <div className='card card-manga'>
    //     <img src={ImageManga} alt='manga-one-piece' width='150px' height='200px'/>
    //     <img src='' alt=''/>
    //     <div className='ligne'></div>
    //     <div className='name-card'>
    //         <h4>Nom</h4>
    //     </div>

    //     <ButtonOptionCard />
    // </div>
  )
}
