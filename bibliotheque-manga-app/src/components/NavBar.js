import '../styles/NavBar.css'
import loupe from '../assets/loupe.png'
import abri from '../assets/abri.png'
import livreOuvert2 from '../assets/livreOuvert2.png'
import coffreAuTresor from '../assets/coffreAuTresor.png'
import profilUser from '../assets/profilUser.png'
import parametres from '../assets/parametres.png'
import { Link } from 'react-router-dom'





function NavBar(){
    return(
        <ul className="navbar">
                <li>
                    <Link to="Accueil">
                        Logo+Name
                        <img src={""} alt=""/>
                    </Link> 
                </li>
                <li>
                    <div className="Search-bar">
                        <input type="text" name="searchBar" id="" placeholder="Rechercher..."/>
                        <img className="loupe" src={loupe} alt="icone-loupe" height="30px" width="30px"/>
                    </div>
                </li>
                <li>
                    <div>                    
                        <Link to="/Accueil">
                            <img src={abri} alt="icone-maison" height="30px" width="30px"/>
                            ACCUEIL
                        </Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="/Catalogue-choix">
                            <img src={livreOuvert2} alt="icone-livre" height="30px" width="30px"/>
                            CATALOGUE
                        </Link> 
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="Ma-collection">
                            <img src={coffreAuTresor} alt="icone-coffre" height="30px" width="30px"/>
                            MA COLLECTION
                        </Link>
                    </div>
                </li>
                <li>
                    <Link to="Profil">
                        <img src={profilUser} alt="icone-profil" height="40px" width="40px"/>
                    </Link>
                </li>
                <li>
                    <Link to="Parametre">
                        <img src={parametres} alt="icone-paramètre" height="40px" width="40px"/>
                    </Link>
                </li>
            </ul>
    )
}

export default NavBar