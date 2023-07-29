import React from 'react';
import Caroussel from './Caroussel';
import { useSelector, useDispatch } from 'react-redux';
import { getCarouselDernierAjoutCards, getCarouselNouveautesAnime, getCarouselNouveautesManga } from '../../actions/cartecarousel.action';
import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'




function Accueil() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getCarouselNouveautesAnime());
        dispatch(getCarouselDernierAjoutCards());
        dispatch(getCarouselNouveautesManga());
      }, []);
    

    const cartesCarouselNouveautesAnime = useSelector(state => state.carteCarouselReducer.nouveauteCards);
    const cartesCarouselDernierAjout = useSelector(state => state.carteCarouselReducer.dernierAjoutCards);
    const cartesCarouselNouveautesManga = useSelector(state => state.carteCarouselReducer.pepiteCards);

return(
    <>
    <div className="title-accueil-div">
        <h1>Accueil</h1>
    </div>
        
    <div className='container-accueil'>
    <Caroussel title={"Animés en cours"} data={cartesCarouselNouveautesAnime} />
    <Caroussel title={"Mangas en cours"} data={cartesCarouselNouveautesManga} />
    {cartesCarouselDernierAjout.length === 0 ? (
          <div className='ajoute-a-ta-collection'>
            <button onClick={() => navigate('Catalogue-choix')}>
                <h3>Ajoute des œuvres à ta collection en cliquant ici!</h3>
            </button>
          </div>
        ) : (
          <Caroussel title={"Les derniers ajouts à ma collection"} data={cartesCarouselDernierAjout} />
    )}
    </div>
    </>
    )}

export default Accueil