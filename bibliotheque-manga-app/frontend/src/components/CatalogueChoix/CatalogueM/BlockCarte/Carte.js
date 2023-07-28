import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from '../../../Utils'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { getCardData, getCards, postCollectionCards } from '../../../../actions/carte.action'

export default function Carte ({nameComponent}) {
  // Sélectionne les données de cartes à partir du state avec useSelector
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compName = nameComponent;
  const animeTypeArray = ["TV", "Movie", "OVA", "Special", "ONA", "Music"];
  const mangaTypeArray = ["Manga", "Novel", "Light Novel", "One-shot", "Doujin", "Manhwa", "Manhua"];
  const pagination = useSelector(state => state.carteReducer.pagination)
  const currentPage = pagination.current_page
  const cartes = useSelector(state => state.carteReducer.allCards)
  const nbCard = useSelector(state => parseInt(state.carteReducer.nbCard))
  const messageCardSuccessfullyAdded = useSelector(state => state.carteReducer.postCardMessage); 

  const addCollectionCard = (carte) => {
      const modifiedCarte = {...carte, mal_id: "customCard" + carte.mal_id};
      console.log(modifiedCarte);
      dispatch(postCollectionCards(modifiedCarte));
      const cardElement = document.getElementById(carte.mal_id);
      const cardSuccessfullyAdded = document.createElement('div');
      cardSuccessfullyAdded.classList.add('card-successfully-added');
      cardSuccessfullyAdded.textContent = `${messageCardSuccessfullyAdded}`;
      cardElement.appendChild(cardSuccessfullyAdded);
      setTimeout(() => {
        cardSuccessfullyAdded.remove();
      }, 1500);
  }
  const openPageCard = (carte, carteTitle) => {
      dispatch(getCardData(carte));
      navigate(`/Catalogue/${carteTitle}`);
  }

  // const startIndex = (currentPage - 1) * nbCard;
  // const endIndex = startIndex + nbCard;
  // console.log(startIndex,endIndex);
  const endSlice = cartes.length < 25 ? cartes.length : 25

  return (
    <div className="container-card">
      <div className="sous-container-card">
        {!isEmpty(cartes) && cartes.slice(0, endSlice).map((carte) => {
          const isMangaType = mangaTypeArray.includes(carte.type);
          const isAnimeType = animeTypeArray.includes(carte.type);
          const typeClassName = `${isAnimeType ? "type-anime" : isMangaType ? "type-manga" : "type-else"}`;
          return (
              <div id={carte.mal_id} className="card card-carte" key={carte.mal_id}>
                {/* <Link to={`/Catalogue/${carte.title}`} key={carte.mal_id}> */}
                <div className='container-image' onClick={() => openPageCard(carte, carte.title)}>
                  <img src={carte.images.jpg.image_url} className="catalogue-manga-card-image" alt={carte.title} />
                </div>
                
                <div className="icone-add-card" onClick={() => addCollectionCard(carte)}>
                  {/* {isSelected && <OptionCardSelector cartes={cartes} cardId={carte.mal_id} cardTitle={carte.title}/>} */}
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
