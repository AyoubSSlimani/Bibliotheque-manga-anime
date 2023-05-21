import React from 'react'
import '../../styles/CatalogueFiltre.css'
import CheckboxGenre from '../CheckboxGenre'
import BlockNombreChapitre from './BlockNombreChapitre'


export default function CatalogueFiltre() {
    
  return (
    <div className="blockTrier">
            <BlockNombreChapitre></BlockNombreChapitre>
            <CheckboxGenre></CheckboxGenre>
            

            <div className="petitContainer3">
                <button className="btn-tri">
                    Trier
                </button>

                <button className="btn-effacer-tri">
                    X
                </button>
            </div>
        </div>
  )
}
