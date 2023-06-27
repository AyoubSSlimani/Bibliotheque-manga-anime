import React from 'react'
import '../../../../styles/BlockNombreChapitre.css'
import flecheVersLeBas2 from '../../../../assets/fleche-vers-le-bas2.png'
import { toggleTerminer } from '../../../../actions/checkboxes.action';
import { useDispatch, useSelector } from 'react-redux';


export default function BlockNombreChapitre() {
    const dispatch = useDispatch();

    const handleTerminerChange = (checkboxId) => {
        dispatch(toggleTerminer(checkboxId));
      };

    const terminer = useSelector(state => state.carteReducer.terminer[0]);
    
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
                    checked={terminer.checked}
                    onChange={() => handleTerminerChange(terminer.id)}
                    name={terminer.name}
                    key={terminer.id}
                    />
                    <p>Terminé</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
