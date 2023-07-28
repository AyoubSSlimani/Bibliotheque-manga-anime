import Caroussel from './Caroussel';
import { useSelector, useDispatch } from 'react-redux';
import { getCarouselDernierAjoutCards, getCarouselNouveauteCards, getCarouselPepiteCards } from '../../actions/cartecarousel.action';

import { useEffect } from 'react';



function Accueil() {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getCarouselNouveauteCards());
        dispatch(getCarouselDernierAjoutCards());
        // dispatch(getCarouselPepiteCards());
      }, []);
    

    const cartesCarouselNouveaute = useSelector(state => state.carteCarouselReducer.nouveauteCards);
    const cartesCarouselDernierAjout = useSelector(state => state.carteCarouselReducer.dernierAjoutCards);
    const cartesCarouselPepite = useSelector(state => state.carteCarouselReducer.pepiteCards);
return(
    <>
    <div className="title-accueil-div">
        <h1>Accueil</h1>
    </div>
        
    <div className='container-accueil'>
    <Caroussel title={"Nouveautés"} data={cartesCarouselNouveaute}  ></Caroussel>
    <Caroussel title={"Les derniers ajouts à ma collection"} data={cartesCarouselDernierAjout}></Caroussel>
    <Caroussel title={"Les pépites"} data={cartesCarouselPepite}></Caroussel>
    </div>
    </>
    )}

export default Accueil