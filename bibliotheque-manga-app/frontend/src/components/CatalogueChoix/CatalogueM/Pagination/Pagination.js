import React from 'react';
import '../../../../styles/Pagination.css';
import FlecheVersLeBas from '../../../../assets/fleche-vers-le-bas-pour-naviguer.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../../../actions/carte.action';
import { getFilterPage } from '../../../../actions/filtres.action';

export default function Pagination() {

  //VARIABLES GLOBALES
  const dispatch = useDispatch();
  const visibleButtons = 5;
  const halfVisibleButtons = Math.floor(visibleButtons / 2);
  const checkboxes = useSelector(state => state.carteReducer.checkboxes);
  const paginationAllCards = useSelector(state => state.carteReducer.paginationAllCards);
  const paginationFilteredCards = useSelector(state => state.carteReducer.paginationFilteredCards);
  const paginationSearchBar = useSelector(state => state.carteReducer.paginationSearchBar);
  const checkboxesUnchecked = checkboxes.every(checkbox => !checkbox.checked);
  //VARIABLES GLOBALES
  
  const currentPageAllCards = paginationAllCards.current_page;
  const currentPageFilteredCards = paginationFilteredCards.current_page;
  const currentPageSearchBar = paginationSearchBar.current_page; 
  const totalPagesAllCards = paginationAllCards.last_visible_page;
  const totalPagesFilteredCards = paginationFilteredCards.last_visible_page;
  const totalPagesSearchBar = paginationSearchBar.last_visible_page;
  const pagesFilteredCards = [];
  const pagesAllCards = [];
  const pagesSearchBar = [];

  console.log(Object.keys(paginationFilteredCards).length > 0 && !checkboxesUnchecked || Object.keys(paginationSearchBar).length > 0);
  const handlePageChange = (page) => {
    console.log(page);
    if (Object.keys(paginationAllCards).length > 0 && checkboxesUnchecked && Object.keys(paginationSearchBar).length === 0) {
      dispatch(getCards(page));
    } else if (Object.keys(paginationFilteredCards).length > 0 && !checkboxesUnchecked) {
      dispatch(getFilterPage(page));
    } else if (Object.keys(paginationSearchBar).length > 0 && checkboxesUnchecked) {
      console.log("oui");
    }
  };

  const renderPagination = () => {
    let currentPage, totalPages, pages, startPage, endPage;
    

    if (Object.keys(paginationAllCards).length > 0 && checkboxesUnchecked && Object.keys(paginationSearchBar).length === 0) {
      currentPage = currentPageAllCards;
      totalPages = totalPagesAllCards;
      pages = pagesAllCards;
    } else if(Object.keys(paginationFilteredCards).length > 0 && !checkboxesUnchecked) {
        currentPage = currentPageFilteredCards;
        totalPages = totalPagesFilteredCards;
        pages = pagesFilteredCards;
    } else if(Object.keys(paginationSearchBar).length > 0 && checkboxesUnchecked) {
      currentPage = currentPageSearchBar;
      totalPages = totalPagesSearchBar;
      pages = pagesSearchBar;
    } else {
      return null; // Rendu nul si les données de pagination ne sont pas disponibles
    }

    

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    
    // Calcul des pages visibles
    startPage = Math.max(1, currentPage - halfVisibleButtons);
    endPage = Math.min(startPage + visibleButtons - 1, totalPages);

    if (endPage - startPage + 1 < visibleButtons) {
      startPage = Math.max(1, endPage - visibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      
      pages.push(
        <button
          className={currentPage === i ? 'current-button' : 'other-button'}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <button
          className="other-button"
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <>
        <button
          className={isFirstPage ? 'bg-fleche-unable prev' : 'bg-fleche prev'}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage}
        >
          <img src={FlecheVersLeBas} alt="fleche-gauche" width="25px" height="25px" />
        </button>
        <div className="nombre-page">
          {pages}
        </div>
        <button
          className={isLastPage ? 'bg-fleche-unable next' : 'bg-fleche next'}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage}
        >
          <img src={FlecheVersLeBas} alt="fleche-droite" width="25px" height="25px" />
        </button>
      </>
    );
  };

  return (
    <nav className="page">
      {renderPagination()}
    </nav>
  );
}








 // Fonction pagination()
    // Prend en paramètre le nombre de carte à afficher par page (CLEAR)
    // Incrémente le nombre de page si le nombre maximum de carte est dépasser (CLEAR)
    // Récupère les cartes restantes et les affiches sur d'autres page quand je clique sur la page 
    // Lorsque il n'y a plus de page à ajouter changer la couleur de la flèche de droite
    // Au début changer la couleur de la flèche de gauche par défaut 
    // Lorsque je change de page avec la flèche de droite la flèche de gauche change de couleur

 // Fonction qui permet de changer la couleur des flèches de pagination par rapport au nombre de page suivant ou précédent
    
    // const [startIndex, setStartIndex] = useState(0);
    // const [isValidLeftPage, setIsValidLeftPage] = useState(false);
    // const [isValidRightPage, setIsValidRightPage] = useState(true);
    // const newIsValidRightPage = true;
    // const newIsValidLeftPage = true;

    // Si on est au début du tableau alors par défaut la flèche de gauche est unable avec une couleur rouge (CLEAR)
    // Si il y a plus d'une page et que l'on clique sur la flèche de droite alors la flèche de gauche reprend une couleur normal
    // Si on clique sur la flèche de droite et qu'il y a plus d'une page alors la flèche de gauche reprend une couleur normal et redevient able
    // Si on clique sur la flèche de gauche qui est able et qu'on revient au début du tableau alors la flèche de gauche redevient unable et sa couleur devient rouge
    
    // const handleNextLefttPage = (tabPage) => {
    //     console.log("non");
    //     if(tabPage.length > 1 && isValidRightPage){
    //         console.log("oui")
    //         setIsValidLeftPage(true);
    //     }
    // }
