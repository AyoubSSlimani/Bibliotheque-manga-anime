import React from 'react'
import '../../../../styles/Carte.css'
import ImageManga from '../../../../assets/A_l_Aube_d_une_grande_aventure_One_Piece_tome_1-361143691.jpg'
import ButtonOptionCard from './ButtonOptionCard'


export default function Carte() {

  const tabManga = [
    {id:1 ,name: "Naruto", genre: ["action", "aventure"], terminer: true},
    {id:2 ,name: "One Piece", genre: ["action", "aventure"],  terminer: false},
    {id:3 ,name: "Grand Blue", genre: ["comédie", "aventure"], terminer: false},
    {id:4 ,name: "Naruto", genre: ["action", "aventure"], terminer: true},
    {id:5 ,name: "One Piece", genre: ["action", "aventure"],  terminer: false},
    {id:6 ,name: "Grand Blue", genre: ["comédie", "aventure"], terminer: false},

]

  
  return (

    <div card card-manga>
      {tabManga.map((manga) => (
        <div key={manga.id}>
          <h3>{manga.name}</h3>
          <img src={manga.image} alt={manga.name} />
          {/* Affichez les autres informations du manga */}
        </div>
      ))}
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
