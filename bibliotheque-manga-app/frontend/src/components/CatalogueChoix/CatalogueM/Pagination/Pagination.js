import React, { useState } from 'react'
import '../../../../styles/Pagination.css'
import { Link } from 'react-router-dom'
import FlecheVersLeBas from '../../../../assets/fleche-vers-le-bas-pour-naviguer.png'

export default function Pagination({nbCard, handlePageChange, totalPages, currentPage}) {

    //Fonction pagination()
    //Prend en paramètre le nombre de carte à afficher par page (CLEAR)
    //Incrémente le nombre de page si le nombre maximum de carte est dépasser (CLEAR)
    //Récupère les cartes restantes et les affiches sur d'autres page quand je clique sur la page 
    //Lorsque il n'y a plus de page à ajouter changer la couleur de la flèche de droite
    //Au début changer la couleur de la flèche de gauche par défaut 
    //Lorsque je change de page avec la flèche de droite la flèche de gauche change de couleur


    // const pages = [];

    //Fonction qui permet d'afficher le nombre de page en fonction du nombre de carte et du nombre de carte par page
    // const nombreDePage = (nbCarteParPage, nbCarte) => {
    //     let page = 1;
    //     if(nbCarteParPage < nbCarte){
    //     for(let i=0; i < nbCarte / nbCarteParPage; i++){
    //         pages.push(<Link to="" className="page">{page++}</Link>);
    //     }} else if(nbCarte == 0) {
    //         pages.push(<Link to="" className="page"></Link>);
    //     } else {
    //         pages.push(<Link to="" className="page">1</Link>);
    //     }
    // }

    // nombreDePage(nbCard, tabManga.length);

    

   

    //Fonction qui permet de changer la couleur des flèches de pagination par rapport au nombre de page suivant ou précédent
    
    // const [startIndex, setStartIndex] = useState(0);
    // const [isValidLeftPage, setIsValidLeftPage] = useState(false);
    // const [isValidRightPage, setIsValidRightPage] = useState(true);
    // const newIsValidRightPage = true;
    // const newIsValidLeftPage = true;

    //Si on est au début du tableau alors par défaut la flèche de gauche est unable avec une couleur rouge (CLEAR)
    //Si il y a plus d'une page et que l'on clique sur la flèche de droite alors la flèche de gauche reprend une couleur normal
    //Si on clique sur la flèche de droite et qu'il y a plus d'une page alors la flèche de gauche reprend une couleur normal et redevient able
    //Si on clique sur la flèche de gauche qui est able et qu'on revient au début du tableau alors la flèche de gauche redevient unable et sa couleur devient rouge
    
    // const handleNextLefttPage = (tabPage) => {
    //     console.log("non");
    //     if(tabPage.length > 1 && isValidRightPage){
    //         console.log("oui")
    //         setIsValidLeftPage(true);
    //     }
    // }


    const pageOne = currentPage === 1;
    const lastPage = currentPage === totalPages;



    
  return (
        <nav className="page">
            <button  className={pageOne ? 'bg-fleche-unable prev' : 'bg-fleche prev'} onClick={() => handlePageChange(currentPage - 1)} disabled={pageOne}>
                <img src={FlecheVersLeBas} alt="fleche-gauche" width="25px" height="25px"/>
            </button>
            <div className='nombre-page'>
                {Array.from(Array(totalPages).keys()).map((index) => (
                    <button className={currentPage === index + 1 ? 'current-button' : 'other-button' }
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div> 
            <button  className={lastPage ? 'bg-fleche-unable next' : 'bg-fleche next'} onClick={() => handlePageChange(currentPage + 1)} disabled={lastPage}>
                <img src={FlecheVersLeBas} alt="fleche-droite" width="25px" height="25px"/>
            </button>
        </nav>

  )
}
