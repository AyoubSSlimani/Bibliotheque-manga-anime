import React, { useEffect, useState } from 'react'
import { deleteCollectionCards, getCollectionCards } from '../../actions/carte.action';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MaCollectionCards({activeElement}) {
    const navigate = useNavigate();
    const activePage = activeElement;
    const dispatch = useDispatch();
    const location = useLocation();
    const animeTypeArray = ["TV", "Movie", "OVA", "Special", "ONA", "Music"];
    const mangaTypeArray = ["Manga", "Novel", "Light Novel", "One-shot", "Doujin", "Manhwa", "Manhua"];
  
    useEffect(() => {
        dispatch(getCollectionCards());
      }, [dispatch, location]);
    
    const collectionCards = useSelector((state) => state.carteReducer.getCollectionCards);
       // État local pour stocker l'ID de la carte sélectionnée et l'état de l'option de carte ouverte

    // Gère le clic sur l'icône de l'option de carte
    const removeCollectionCard = (carteId) => {
        const cardElement = document.getElementById(carteId);
        cardElement.classList.add('cardDeleted');
        setTimeout(() => {
          dispatch(deleteCollectionCards(carteId))
        }, 400);
    };

    const openCustomPageCard = (cardId) => {
      navigate(`/Ma-collection/${cardId}`);
    }
  return (
    <div className="container-card-ma-collection">
          <div className="sous-container-card-ma-collection">
            {collectionCards && collectionCards.length > 0 ? (
              <div className="sous-container-card">
                {collectionCards.map((carte) => {
                  const isMangaType = mangaTypeArray.includes(carte.type);
                  const isAnimeType = animeTypeArray.includes(carte.type);
                  const typeClassName = `${isAnimeType ? "type-anime" : isMangaType ? "type-manga" : "type-else"}`;
                  return (
                    <div key={carte.mal_id} className="card card-carte" id={carte.mal_id}>
                     
                        <div className="container-image" onClick={() => openCustomPageCard(carte.mal_id)}>
                          <img
                            src={carte.images.jpg.image_url}
                            className="catalogue-manga-card-image"
                            alt={carte.title}
                            width="150px"
                            height="200px"
                          />
                        </div>
                        <div className="icone-remove-card"
                        onClick={() => removeCollectionCard(carte.mal_id)}>
                      </div>
                        <h3 className="carte-catalogue-manga-title" title-length-sup18={carte.title.length > 18 ? "true" : "false"}>{carte.title}</h3>
                        <div className="ligne-carte-catalogue-manga"></div>
                        <div className={typeClassName}>{carte.type}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>
                Vous n'avez pas encore ajouté d'œuvre à votre collection. Pour
                en ajouter aller dans{" "}
                <Link to="/Catalogue-choix" className="catalogue-link">
                  Catalogue
                </Link>
              </p>
            )}
            
          </div>
        </div>
  )
}
