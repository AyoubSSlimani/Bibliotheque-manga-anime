import React, { useEffect } from "react";

import leftArrow from "../../../../assets/arrow-left-circle.svg";
import add from "../../../../assets/add.png";
import circleGrey from "../../../../assets/circle-grey.png";
import { useLocation, useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

export default function CardPage() {
  const carte = useSelector(state => state.carteReducer.cardData);
  useEffect(() => {
    // Déplace la vue vers le haut de la page lorsque le composant est monté
    window.scrollTo(0, 0);
  }, [carte]);
  const location = useLocation();
  const navigate = useNavigate();
  
  

  const { cardTitle } = useParams();
  if (!carte) {
    return <div>Chargement en cours...</div>
  } 
      return (
        <div className="container-custom-card-page">
          <div className="header-custom-card-page">
            <img src={leftArrow} className="left-arrow-custom-card-page" 
            onClick={() => navigate(-1)}
            alt="icone-arrow"/>
            <h1 className="h1-custom-card-page">{carte.title}</h1>
          </div>
          <div className="container-card-image-and-info">
                <img
                className="img-custom-card"
                src={carte.images.jpg.large_image_url}
                alt="img-card"
                />
                <main className="main-custom-card-page">
            <div className="custom-card-page-container-table">
              <table className="custom-page-table">
                <tbody>
                  <tr>
                    <td>Date de sortie</td>
                    <td>20/10/1997</td>
                  </tr>
                  <tr>
                    <td>auteurs</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Nombre de chapitres</td>
                    <td>
                      {carte.chapters
                        ? carte.chapters
                        : "En cours"}
                    </td>
                  </tr>
                  <tr>
                    <td>Marque page</td>
                    <td>625</td>
                  
                  </tr>
                  <tr>
                    <td>Synopsis</td>
                    <td>{carte.synopsis}</td>
                  </tr>
                  <tr>
                    <td>Score MyAnimeList</td>
                    <td>
                      {carte.score != null ? (
                        <>
                          {carte.score}/10, voté par {carte.scored_by} personnes.
                        </>
                      ) : (
                        <>Score non défini.</>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <img src={add} alt="icone-add"/> Ajouter une
                nouvelle propriété
              </p>
            </div>
            </main>
          </div>
        </div>
    );
}
