import React from 'react'
import '../../styles/Pagination.css'
import { Link } from 'react-router-dom'
import FlecheVersLeBas from '../../assets/fleche-vers-le-bas-pour-naviguer.png'



export default function Pagination() {
  return (
    <div classNameName="container-pagination">
            <div className="sous-container-pagination">
                <nav className="page">
                    <Link to=""className="prev">
                        <div className="bg-fleche">
                            <img src={FlecheVersLeBas} alt="fleche-gauche" width="25px" height="25px"/>
                        </div>
                    </Link>
                    <Link to="" className="page"> 1</Link>
                    <Link to="" className="page"> 2</Link>
                    <Link to="" className="page"> 3</Link>
                    <Link to="" className="page"> 4
                        <div className="bg-fleche">
                            <img src={FlecheVersLeBas} alt="fleche-droite" width="25px" height="25px"/>
                        </div>
                    </Link>
                </nav>
            </div>
    </div>
  )
}
