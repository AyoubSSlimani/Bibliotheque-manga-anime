import Caroussel from './Caroussel';
import '../../styles/Accueil.css';
import { carousselNouveaute, carousselDernierAjout, carousselPepite  } from '../../data/DataGenre';

function Accueil() {

return(
    < div className='container-accueil'>  
    <Caroussel title={"Nouveaute"} data={carousselNouveaute} ></Caroussel>
    <Caroussel title={"Les derniers ajouts à ma collection"} data={carousselDernierAjout}></Caroussel>
    <Caroussel title={"Les pépites"} data={carousselPepite}></Caroussel>
    </div>
    )}

export default Accueil