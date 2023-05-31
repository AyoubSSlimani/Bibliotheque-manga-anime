import React from 'react'
import '../../../../styles/BlockNombreChapitre.css'
import flecheVersLeBas2 from '../../../../assets/fleche-vers-le-bas2.png'


export default function BlockNombreChapitre({ handleTerminerChange, checkedTerminer }) {
    const appelDeHandleTerminerChange = (event) => {
        handleTerminerChange(event);
    };
  return (
    <div className="container-nbr-chapitre">
        <div className="sous-container">
            <div className='sous-container-nbr-chapitre'>
                <h3>Nombre de chapitre :</h3>
                <div className="moinsDe">
                    <input type="number"/>
                </div>
                <img className="signe-inferieur" src={flecheVersLeBas2} alt="icone-fleche" width="30px" height="30px"/>
                <div className="plusDe">
                    <input type="number"/>
                </div>
                <div className="checkboxText terminer">
                    <input type="checkbox"
                    checked={checkedTerminer}
                    onChange={appelDeHandleTerminerChange}
                    name='terminer'
                    />
                    <p>Terminé</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
