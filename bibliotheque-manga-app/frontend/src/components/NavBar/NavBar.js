import React from 'react';
import { Link } from 'react-router-dom';
import livreOuvert2 from "../../assets/livreOuvert2.png";
import coffreAuTresor from "../../assets/coffreAuTresor.png";
import profilUser from "../../assets/profilUser.png";
import parametres from "../../assets/parametres.png";
import logo from "../../assets/manga_logo.png";
import loupe from '../../assets/loupe.png';
import menu from '../../assets/menu.png';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className="navlinks">
        
        <ul>
          <li className="logo">
            <Link to="/">
                <img src={logo} alt="logo manga"/>
            </Link>
          </li>
          <li>
            <Link to="/">
              <h3>Accueil</h3>
            </Link>
          </li>
          <li>
            <Link to="/Catalogue-choix">
              <h3>Catalogue</h3>
              <img src={livreOuvert2} alt="catalogue" width="32" height="32" />
            </Link>
          </li>
          <li>
            <Link to="/Ma-Collection">
              <h3>Ma Collection</h3>
              <img src={coffreAuTresor} alt="MaCollection" width="32" height="32" />
            </Link>
          </li>
          <li>
            <Link to="/Profil">
              <img src={profilUser} alt="profil" width="32" height="32" />
            </Link>
          </li>
          <li>
            <Link to="/parametres">
              <img src={parametres} alt="paramètres" width="32" height="32" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
