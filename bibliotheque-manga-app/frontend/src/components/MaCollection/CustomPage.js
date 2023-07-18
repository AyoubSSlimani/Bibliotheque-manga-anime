import React, { useEffect, useState } from 'react'
import { getCollectionCards } from '../../actions/carte.action';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OptionCardCollection from '../CatalogueChoix/CatalogueM/BlockCarte/OptionCardCollection';

export default function CustomPage({activeElement}) {
    const activePage = activeElement;
    console.log(activePage);
    const dispatch = useDispatch();
    const location = useLocation();
    const animeTypeArray = ["TV", "Movie", "OVA", "Special", "ONA", "Music"];
    const mangaTypeArray = ["Manga", "Novel", "Light Novel", "One-shot", "Doujin", "Manhwa", "Manhua"];
  
    useEffect(() => {
        dispatch(getCollectionCards());
      }, [dispatch, location]);
    
    const collectionCards = useSelector((state) => state.carteReducer.getCollectionCards);
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
    <div className="container-card-ma-collection">
          <div className="sous-container-card-ma-collection">
            {collectionCards && collectionCards.length > 0 ? (
              <div className="sous-container-card">
                {collectionCards.map((carte) => {
                  const isSelected = selectedCardId === carte.mal_id;
                  const isMangaType = mangaTypeArray.includes(carte.type);
                  const isAnimeType = animeTypeArray.includes(carte.type);
                  const typeClassName = `${isAnimeType ? "type-catalogue-anime" : isMangaType ? "type-catalogue-manga" : "type-catalogue-else"}`;
                  return (
                    <div key={carte.mal_id} className="card card-carte">
                      <Link to={`/Ma-collection/${carte.mal_id}`} key={carte.mal_id}>
                        <div className="container-image-optn">
                          <img
                            src={carte.images.jpg.image_url}
                            className="catalogue-manga-card-image"
                            alt={carte.title}
                            width="150px"
                            height="200px"
                          />
                        </div>
                        </Link>
                        <div className="icone-option-card"
                        onClick={() => handleIconeOptionCardClick(carte.mal_id)}>
                        {isSelected && isOptionCardOpen && (
                          <OptionCardCollection cardId={carte.mal_id} />
                        )}
                      </div>
                        <h3 className="carte-catalogue-manga-title" title-length-sup18={carte.title.length > 18 ? "true" : "false"}>{carte.title}</h3>
                        <div className="ligne-carte-catalogue-manga"></div>
                        <div className={typeClassName}>{carte.type}</div>
                    </div>
                  );
                })}
                ;
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
