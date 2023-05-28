import React from 'react'
import '../../../../styles/Carte.css'
import ButtonOptionCard from './ButtonOptionCard'


export default function Carte() {

  const tabManga = [
    {id:1 ,name: 'Naruto', genre: ['Action', 'Aventure'], terminer: true},
    {id:2 ,name: 'One Piece', genre: ['Action', 'Aventure'],  terminer: false},
    {id:3 ,name: 'Grand Blue', genre: ['Comédie', 'Aventure'], terminer: false},
    {id:4 ,name: 'Naruto', genre: ['Action', 'Aventure'], terminer: true},
    {id:5 ,name: 'One Piece', genre: ['Action', 'Aventure'],  terminer: false},
    {id:6 ,name: 'Grand Blue', genre: ['Comédie', 'Aventure'], terminer: false},

]

  
  return (

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
