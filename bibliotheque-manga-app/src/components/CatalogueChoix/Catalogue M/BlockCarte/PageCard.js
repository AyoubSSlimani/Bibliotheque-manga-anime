import React from 'react'
import "../../../../styles/PageCard.css"
import leftArrow from '../../../../assets/flecheGauche.png'
import iconSettings from '../../../../assets/parametres-de-lapplication.png'
import circleYellow from '../../../../assets/circle-yellow.png'
import circleGrey from '../../../../assets/circle-grey.png'
import onePiece from '../../../../assets/A_l_Aube_d_une_grande_aventure_One_Piece_tome_1-361143691.jpg'

export default function PageCard() {
  return (
    <div className='container-card-page'>
        <div className='header-card-page'>
            <img src={leftArrow} alt='icone-arrow' width='30px' height='30px' />
            <img className="pastille" src={circleYellow} alt='pastille' width='60px' height='60px' />
            <h1>Titre de l'oeuvre</h1>
            <img src={iconSettings} className='settings-card-page' alt='icone-settings' width='30px' height='30px'/>
        </div>
        <main>
            <img className='img-card' src={onePiece} alt='img-card' width='250px' height='300px' />
            <div className='container-table'>
                <table>
                    <tr>
                        <td>Date de sortie</td>
                        <td>20/10/1997</td>
                    </tr>
                    <tr>
                        <td>Auteur</td>
                        <td>Nom Prénom</td>
                    </tr>
                    <tr>
                        <td>Nombre de chapitre</td>
                        <td>999</td>
                    </tr>
                    <tr>
                        <td>Marque page</td>
                        <td>625</td>
                    </tr>
                    <tr>
                        <td>Synopsis</td>
                        <td>Il était une fois un pirate...</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td>star star star star</td>
                    </tr>
                </table> 
                <p><img src='' alt='icone-add' width='' height='' /> Ajouter une nouvelle propriété</p>
                
            </div>
        </main>

        <div className='commentary'>
            <img src={circleGrey} alt='icone-profil' height='30px' width='30px' />
            <input id='commentary' type='text' name='commentary' placeholder='Ajouter un commentaire...'/>
        </div>

        
    </div>
  )
}
