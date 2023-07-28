import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from '../../../Utils'
import { Link } from 'react-router-dom'
import OptionCardSelector from './OptionCardSelector'
import { getCards } from '../../../../actions/carte.action'

export default function Carte ({nameComponent}) {
  // Sélectionne les données de cartes à partir du state avec useSelector
  const dispatch = useDispatch()
  const compName = nameComponent;
  const animeTypeArray = ["TV", "Movie", "OVA", "Special", "ONA", "Music"];
  const mangaTypeArray = ["Manga", "Novel", "Light Novel", "One-shot", "Doujin", "Manhwa", "Manhua"];
  const pagination = useSelector(state => state.carteReducer.pagination)
  const currentPage = pagination.current_page
  const cartes = useSelector(state => state.carteReducer.allCards)
  const nbCard = useSelector(state => parseInt(state.carteReducer.nbCard))

  const [selectedCardId, setSelectedCardId] = useState(null)

  const handleIconeOptionCardClick = (carteId) => {
    setSelectedCardId(prevCardId => prevCardId === carteId ? null : carteId)
  }

  // const startIndex = (currentPage - 1) * nbCard;
  // const endIndex = startIndex + nbCard;
  // console.log(startIndex,endIndex);
  const endSlice = cartes.length < 25 ? cartes.length : 25

  return (
    <div className="container-card">
      <div className="sous-container-card">
        {!isEmpty(cartes) && cartes.slice(0, endSlice).map((carte) => {
          const isSelected = selectedCardId === carte.mal_id
          const isMangaType = mangaTypeArray.includes(carte.type);
          const isAnimeType = animeTypeArray.includes(carte.type);
          const typeClassName = `${isAnimeType ? "type-anime" : isMangaType ? "type-manga" : "type-else"}`;
          return (
            <div key={carte.mal_id} className="card card-carte">
              <div className='container-image'>
                <img src={carte.images.jpg.image_url} className="catalogue-manga-card-image" alt={carte.title} />
              </div>
              
              <div className="icone-option-card" onClick={() => handleIconeOptionCardClick(carte.mal_id)}>
                {isSelected && <OptionCardSelector cartes={cartes} cardId={carte.mal_id} cardTitle={carte.title}/>}
              </div>
              <h3 className='carte-catalogue-manga-title' title-length-sup18={carte.title.length > 18 ? 'true' : 'false'}>{carte.title}</h3>
              <div className="ligne-carte-catalogue-manga"></div>
              <div className={typeClassName}>{carte.type}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
