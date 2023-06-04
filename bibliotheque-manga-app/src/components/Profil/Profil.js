import React from 'react';
import '../../styles/Profil.css'
import Badge from './Badge'

const Profil = () => {


    return (
        <div className='container-profil'>
            <div className='fond-ecran-container' alt='fond-ecran-container' ></div>
            <div className='fond-ecran' alt='fond-ecran'></div>
            <div className='photo-profil' alt='photo-profil'></div>
            <div className='pseudo-titre-biographie' alt='pseudo-biographie'>
            <h2>PSEUDO</h2>
            <h3>Titre</h3>
            <h4>BIOGRAPHIE</h4>
            </div>
            <div className='watchtime' alt='watchtime'>
                <h3>Total Watchtime: 00j 00h 00m</h3>
            </div>
            <div className='mes-badges' alt='mes-badges'>
                <h2>Mes badges</h2>
                <Badge/> 
            </div>
            <div className='statistiques' alt='statistiques'>
                <h2>Statistiques</h2>
            </div>
        </div>
    );
};

export default Profil;