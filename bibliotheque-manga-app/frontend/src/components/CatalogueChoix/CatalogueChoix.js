import React, { useEffect } from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function CatalogueChoix() {
    useEffect(() => {
        // Déplace la vue vers le haut de la page lorsque le composant est monté
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='container-catalogue-choix'>
        <h1>Catalogue</h1>

        <div className="sous-container-catalogue-choix">
                <Link to="/Catalogue-anime" className='link-catalogue'>
                    <div className="anime">
                        <h2>ANIME</h2>
                    </div>
                </Link>

                <Link to="/Catalogue-manga" className='link-catalogue'>
                    <div className="manga">
                        <h2>MANGA</h2>
                    </div>
                </Link>
        </div>
        <Outlet/>
    </div>
  )
}
