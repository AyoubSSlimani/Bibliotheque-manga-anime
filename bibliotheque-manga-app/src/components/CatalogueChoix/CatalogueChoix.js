import React from 'react'
import '../../styles/CatalogueChoix.css'
import {Link, Outlet} from 'react-router-dom'

export default function CatalogueChoix() {
  return (
    <div className='container'>
        <h1>Catalogue</h1>

        <div className="containerCatalogueChoix">
                <Link to="/Catalogue-choix/Catalogue-anime" className='link-catalogue'>
                    <div className="anime">
                        <h2>ANIME</h2>
                    </div>
                </Link>

                <Link to="/Catalogue-choix/Catalogue-manga" className='link-catalogue'>
                    <div className="manga">
                        <h2>MANGA</h2>
                    </div>
                </Link>
        </div>
        <Outlet/>
    </div>
  )
}
