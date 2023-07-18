import React, { useEffect, useState } from "react";
import "../../styles/MaCollection.css";
import "../../styles/Carte.css";
import loupe from "../../assets/loupe.png";
import MaCollectionFiltre from "./MaCollectionFiltre";
import MaCollectionSearchBar from "./MaCollectionSearchBar";

import CustomPage from "./CustomPage";

export default function MaCollection() {

  

  const [isFiltreVisible, setFiltreVisible] = useState(false);
  const [showWindow, setShowWindow] = useState(false);

  const handleIconClick = (event) => {
    setShowWindow(true);
  };

  const handleCloseWindow = () => {
    setShowWindow(false);
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
    }
  });
}, []);


  

  

  return (
    <div className="container-ma-collection">
      <div className="sous-container-ma-collection">
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
            <button onClick={handleIconClick}>
              <img
                src={loupe}
                className="loupe"
                alt="rechercher"
                width="50px"
                height="50px"
              />
            </button>
            {showWindow && (
              <div className="window">
                <MaCollectionSearchBar></MaCollectionSearchBar>
                <button onClick={handleCloseWindow}>Fermer</button>
              </div>
            )}
          </div>
        </div>

        {isFiltreVisible && <MaCollectionFiltre></MaCollectionFiltre>}
        <CustomPage activeElement={activeElement}/>
      </div>
    </div>
  );
}
