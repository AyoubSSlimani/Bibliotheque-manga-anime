import React, { useEffect, useState } from "react";
import "../../styles/MaCollection.css";
import "../../styles/Carte.css";
import loupe from "../../assets/loupe.png";
import MaCollectionFiltre from "./MaCollectionFiltre";
import MaCollectionSearchBar from "./MaCollectionSearchBar";
import Newpage from "./Newpage";

import { useDispatch, useSelector } from "react-redux";
import { getCollectionCards } from "../../actions/carte.action";
import OptionCardCollection from "../CatalogueChoix/CatalogueM/BlockCarte/OptionCardCollection";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function MaCollection() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getCollectionCards());
  }, [dispatch, location]);

  const collectionCards = useSelector(
    (state) => state.carteReducer.getCollectionCards
  );

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

  const [isFiltreVisible, setFiltreVisible] = useState(false);
  const [showWindow, setShowWindow] = useState(false);

  const handleIconClick = (event) => {
    setShowWindow(true);
  };

  const handleCloseWindow = () => {
    setShowWindow(false);
  };

  const handleButtonClick = () => {
    if (!isFiltreVisible) {
      setFiltreVisible(true);
    } else {
      setFiltreVisible(false);
    }
  };

  return (
    <div className="container">
      <div className="container-ma-collection">
        <div className="option-menu">
          <div className="title-menu-left">
            <div className="page-all">
              <h3>All</h3>
            </div>
            <Newpage />
          </div>

          <div className="title-menu-right">
            <button className="button-filter" onClick={handleButtonClick}>
              Filtrer
            </button>
            <button onClick={handleIconClick}>
              <img
                src={loupe}
                className="loupe"
                alt="rechercher"
                width="50px"
                height="50px"
              />
            </button>
            {showWindow && (
              <div className="window">
                <MaCollectionSearchBar></MaCollectionSearchBar>
                <button onClick={handleCloseWindow}>Fermer</button>
              </div>
            )}
          </div>
        </div>

        {isFiltreVisible && <MaCollectionFiltre></MaCollectionFiltre>}

        <div className="container-card-ma-collection">
          <div className="sous-container-card-ma-collection">
            {collectionCards && collectionCards.length > 0 ? (
              <div className="sous-container-card">
                {collectionCards.map((carte) => {
                  const isSelected = selectedCardId === carte.mal_id;
                  return (
                    <div key={carte.mal_id} className="card card-carte">
                      <Link to={`/Ma-collection/${carte.mal_id}`} key={carte.mal_id}>
                        <div className="container-image-optn">
                          <img
                            src={carte.images.jpg.image_url}
                            className="collection-manga-card-image"
                            alt={carte.title}
                            width="150px"
                            height="200px"
                          />
                        </div>
                        </Link>
                        <div className="ligne"></div>
                        <div className="name-card">
                          <h3 className="carte-catalogue-manga-title" title-length-sup18={carte.title.length > 18 ? "true" : "false"}>{carte.title}</h3>
                        </div>
                      
                      <div
                        className="icone-option-card"
                        onClick={() => handleIconeOptionCardClick(carte.mal_id)}
                      >
                        {isSelected && isOptionCardOpen && (
                          <OptionCardCollection cardId={carte.mal_id} />
                        )}
                      </div>
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
      </div>
    </div>
  );
}
