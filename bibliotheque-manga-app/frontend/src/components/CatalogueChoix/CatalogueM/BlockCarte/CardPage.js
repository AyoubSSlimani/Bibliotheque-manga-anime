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

  const toggleSynopsis = () => {
    const synopsisElement = document.querySelector('.synopsis');
    const toggleSynopsisElement = document.querySelector('.toggle-synopsis');

    if (synopsisElement.classList.contains('collapsed')) {
      synopsisElement.classList.remove('collapsed');
      toggleSynopsisElement.textContent = 'Voir plus';
    } else {
      synopsisElement.classList.add('collapsed');
      toggleSynopsisElement.textContent = 'Voir moins';
    }

  };


  const { cardTitle } = useParams();
  if (!carte) {
    return <div>Chargement en cours...</div>
  }
  return (
    <div className="container-card-page">
      <div className="header-card-page">
        <img src={leftArrow} className="left-arrow-card-page"
          onClick={() => navigate(-1)}
          alt="icone-arrow" />
        <h1 className="h1-card-page" title-length-sup18={carte.title.length > 18 ? 'true' : 'false'}>{carte.title}</h1>
      </div>
      <div className="container-card-image-and-info">
        <img
          className="img-card"
          src={carte.images.jpg.large_image_url}
          alt="img-card"
        />
        <main className="main-card-page">
          <div className="card-page-container-table">
            <table className="page-table">
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
                  <td className="synopsis">{carte.synopsis}
                    <div className="container-toggle-synopsis">
                      <button className="toggle-synopsis" onClick={() => toggleSynopsis()}>
                        Voir plus <i className="fa-solid fa-caret-right"></i>
                      </button>
                    </div></td>
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
              <img src={add} alt="icone-add" /> Ajouter une
              nouvelle propriété
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
