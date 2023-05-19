import '../styles/NavBar.css'
import loupe from '../assets/loupe.png'
import abri from '../assets/abri.png'
import livreOuvert2 from '../assets/livreOuvert2.png'
import coffreAuTresor from '../assets/coffreAuTresor.png'
import profilUser from '../assets/profilUser.png'
import parametres from '../assets/parametres.png'





function NavBar(){
    return(
        <ul className="navbar">
                <li>
                    <a href="accueil.html">
                        Logo+Name
                        <img src={""} alt=""/>
                    </a> 
                </li>
                <li>
                    <div className="search-bar">
                        <input type="text" name="searchBar" id="" placeholder="Rechercher..."/>
                        <img className="loupe" src={loupe} alt="icone-loupe" height="30px" width="30px"/>
                    </div>
                </li>
                <li>
                    <div>                    
                        <link to="/">
                            <img src={abri} alt="icone-maison" height="30px" width="30px"/>
                            ACCUEIL
                        </link>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="CatalogueChoix.html">
                            <img src={livreOuvert2} alt="icone-livre" height="30px" width="30px"/>
                            CATALOGUE
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="MaCollection.html">
                            <img src={coffreAuTresor} alt="icone-coffre" height="30px" width="30px"/>
                            MA COLLECTION
                        </a>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <img src={profilUser} alt="icone-profil" height="40px" width="40px"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={parametres} alt="icone-paramètre" height="40px" width="40px"/>
                    </a>
                </li>
            </ul>
    )
}

export default NavBar