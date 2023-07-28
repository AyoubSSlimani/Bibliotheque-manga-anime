import React, { useEffect, useState } from "react";

import loupe from "../../assets/loupe.png";
import MaCollectionFiltre from "./MaCollectionFiltre";
import MaCollectionCards from "./MaCollectionCards";

export default function MaCollection() {
  useEffect(() => {
    // Déplace la vue vers le haut de la page lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []);
  
  const [isFiltreVisible, setFiltreVisible] = useState(false);

  const handleIconClick = (event) => {
    setShowWindow(true);
  };

  const handleButtonClick = () => {
    if (!isFiltreVisible) {
      setFiltreVisible(true);
    } else {
      setFiltreVisible(false);
    }
  };

let activeElement;

let pages = 1;
const maxPages = 3;

useEffect(() => {
  const pageAllElement = document.querySelector('.page-all');
  activeElement = pageAllElement;
  const addPageElement = document.querySelector('.icone-add-page');
  const titleMenuLeft = document.querySelector('.title-menu-left');
  const customPageElement = document.querySelector(`.custom-page`);
  
  pageAllElement.addEventListener('click', function() {
    if (activeElement !== pageAllElement) {
          
      activeElement.style.boxShadow = '';
      pageAllElement.style.boxShadow = '0px 1px 4px rgb(237 237 237 / 50%)';
      activeElement = pageAllElement;
    };
  });
  
  
  addPageElement.addEventListener('click', function() {
    if (pages <= maxPages) {
      const customPage = document.createElement('div');
      customPage.textContent = `Page ${pages}`;
      customPage.classList.add('custom-page');
      const key = `custom-page-${pages}`;
      customPage.setAttribute('key', key);
      pages = pages + 1;
      titleMenuLeft.insertBefore(customPage, addPageElement);

      customPage.addEventListener('click', function() {
        if (activeElement !== customPage) {
          activeElement.style.boxShadow = '';
          customPage.style.boxShadow = '0px 1px 4px rgb(237 237 237 / 50%)';
          activeElement = customPage;
        }
      });

      customPage.addEventListener('dblclick', function() {
        customPage.contentEditable = 'true';
        customPage.focus();
      });

      customPage.addEventListener('blur', function() {
        customPage.contentEditable = 'false';
      });
      
      customPage.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
          event.preventDefault();
          customPage.contentEditable = 'false';
        }
      })
    }
  });
}, []);


  

  

  return (
    <div className="container-ma-collection">
      <div className="sous-container-ma-collection">
        <h1>Ma collection</h1>
        <div className="option-menu">
          <div className="title-menu-left">
          <div className="page-all" style={{ boxShadow: '0px 1px 4px rgb(237 237 237 / 50%)' }}>
              All
            </div>
            <div className="icone-add-page"></div>
          </div>

          <div className="title-menu-right">
            <button className="button-filter" onClick={handleButtonClick}>
              Filtrer
            </button>
          </div>
        </div>

        {isFiltreVisible && <MaCollectionFiltre></MaCollectionFiltre>}
        <MaCollectionCards activeElement={activeElement}/>
      </div>
    </div>
  );
}
