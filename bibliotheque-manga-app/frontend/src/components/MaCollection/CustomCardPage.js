import React, { useEffect } from "react";

import leftArrow from "../../assets/arrow-left-circle.svg";
import add from "../../assets/add.png";
import circleGrey from "../../assets/circle-grey.png";

import { useDispatch, useSelector } from "react-redux";
import { getCollectionCards } from "../../actions/carte.action";
import { useLocation, useNavigate, useParams } from "react-router";

export default function CustomCardPage() {
  useEffect(() => {
    // Déplace la vue vers le haut de la page lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCollectionCards());
  }, [dispatch, location]);

  const { cardId } = useParams();
  const collectionCards = useSelector(
    (state) => state.carteReducer.getCollectionCards
  );
  const customCardData = collectionCards.find(
    (carte) => carte.mal_id === cardId
  );
  let marquePage = 0;
  if (collectionCards.length === 0) {
    return <p>Aucune carte trouvée dans votre collection.</p>;
  }

  if (!customCardData) {
    return <p>Carte non trouvée.</p>;
  }

  return (
    <div className="container-custom-card-page">
      <div className="header-custom-card-page">
        <img src={leftArrow} className="left-arrow-custom-card-page" 
        onClick={() => navigate(-1)}
        alt="icone-arrow"/>
        <h1 className="h1-custom-card-page">{customCardData.title}</h1>
      </div>
      <div className="container-card-image-and-info">
            <img
            className="img-custom-card"
            src={customCardData.images.jpg.large_image_url}
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
                  {customCardData.chapters
                    ? customCardData.chapters
                    : "En cours"}
                </td>
              </tr>
              <tr>
                <td>Marque page</td>
                <td>625</td>
              
              </tr>
              <tr>
                <td>Synopsis</td>
                <td>{customCardData.synopsis}</td>
              </tr>
              <tr>
                <td>Score MyAnimeList</td>
                <td>
                  {customCardData.score !== 0 ? (
                    <>
                      {customCardData.score}/10, voté par {customCardData.scored_by} personnes.
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
