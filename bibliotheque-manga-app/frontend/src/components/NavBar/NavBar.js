import '../../styles/NavBar.css'
import loupe from '../../assets/loupe.png'
import abri from '../../assets/abri.png'
import livreOuvert2 from '../../assets/livreOuvert2.png'
import coffreAuTresor from '../../assets/coffreAuTresor.png'
import profilUser from '../../assets/profilUser.png'
import parametres from '../../assets/parametres.png'
import { Link } from 'react-router-dom'
import menu from '../../assets/menu.png'
import { useState, useEffect } from 'react'





function NavBar(){

    const mobileSize = window.innerWidth <= 580;
    console.log(mobileSize);

        
        const [isOpen, setIsOpen] = useState(false);
        const [isMobile, setIsMobile] = useState(false);

        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 580);
          };
      
          // Écoute le redimensionnement de la fenêtre
          window.addEventListener('resize', handleResize);
      
          // Vérifie la taille de l'écran au chargement de la page
          handleResize();
      
          // Nettoie l'écouteur d'événement lors du démontage du composant
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        const handleToggleMenu = () => {
          setIsOpen(!isOpen);
        };
      



    return(
        <div className='container-navbar'>
            {isMobile ? 
            (<button className='burger-icon'><img src='menu' alt="menu-icon" width="50px" height="50px" onClick={handleToggleMenu} /></button>)
            : 
            (<ul className='navbar'>
                <li>
                    <Link to="Accueil">
                        Logo+Name
                        {/* <img src={""} alt=""/> */}
                    </Link> 
                </li>
                <li>
                    <div className="Search-bar">
                        <input type="text" name="searchBar" id="" placeholder="Rechercher..."/>
                        <img className="loupe" src={loupe} alt="icone-loupe"/>
                    </div>
                </li>
                <li>
                    <div>                    
                        <Link to="/Accueil">
                            <img src={abri} alt="icone-maison"/>
                            <p>ACCUEIL</p>
                        </Link>
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="/Catalogue-choix">
                            <img src={livreOuvert2} alt="icone-livre"/>
                            <p>CATALOGUE</p>
                        </Link> 
                    </div>
                </li>
                <li>
                    <div>
                        <Link to="Ma-collection">
                            <img src={coffreAuTresor} alt="icone-coffre"/>
                            <p>MA COLLECTION</p>
                        </Link>
                    </div>
                </li>
                <Link to="Profil">
                    <li>
                        <img src={profilUser} alt="icone-profil"/>
                    </li>
                </Link>

                <li>
                    <Link to="Parametre">
                        <img src={parametres} alt="icone-paramètre"/>
                    </Link>
                </li>
            </ul>)
            }

            {isOpen && isMobile ? (<ul className='navbar'>
                <Link to="Accueil">
                    <li>
                        Logo+Name
                        {/* <img src={""} alt=""/> */}
                    </li>
                </Link> 
                <li>
                    <div className="Search-bar">
                        <input type="text" name="searchBar" id="" placeholder="Rechercher..."/>
                        <img className="loupe" src={loupe} alt="icone-loupe"/>
                    </div>
                </li>
                <Link to="/Accueil">
                    <li>
                        <div>                    
                            <img src={abri} alt="icone-maison"/>
                            <p>ACCUEIL</p>
                        </div>
                    </li>
                </Link>
                <Link to="/Catalogue-choix">
                    <li>
                        <div>
                            <img src={livreOuvert2} alt="icone-livre"/>
                            <p>CATALOGUE</p>
                        </div>
                    </li>
                </Link> 

                <Link to="Ma-collection">
                    <li>
                        <div>
                            <img src={coffreAuTresor} alt="icone-coffre"/>
                            <p>MA COLLECTION</p>
                        </div>
                    </li>
                </Link>

                <Link to="Profil">
                    <li>
                        <img src={profilUser} alt="icone-profil"/>
                    </li>
                </Link>
                <Link to="Parametre">
                    <li>
                        <img src={parametres} alt="icone-paramètre"/>
                    </li>
                </Link>

            </ul>) : "" }
            </div>
    )
}

export default NavBar