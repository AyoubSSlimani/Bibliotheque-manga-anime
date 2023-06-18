import Caroussel from './Caroussel';
import '../../styles/Accueil.css';
import { useSelector } from 'react-redux';

function Accueil() {
    const cartesCarouselNouveaute = useSelector(state => state.carteCarouselReducer.nouveauteCards);
    const cartesCarouselDernierAjout = useSelector(state => state.carteCarouselReducer.dernierAjoutCards);
    const cartesCarouselPepite = useSelector(state => state.carteCarouselReducer.pepiteCards);
return(
    < div className='container-accueil'>  
    <Caroussel title={"Nouveaute"} data={cartesCarouselNouveaute}  ></Caroussel>
    <Caroussel title={"Les derniers ajouts à ma collection"} data={cartesCarouselDernierAjout}></Caroussel>
    <Caroussel title={"Les pépites"} data={cartesCarouselPepite}></Caroussel>
    </div>
    )}

export default Accueil