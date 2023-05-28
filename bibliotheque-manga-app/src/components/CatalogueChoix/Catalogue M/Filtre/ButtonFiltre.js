import React, { useState } from 'react'
import CatalogueFiltre from './CatalogueFiltre';
import '../../../../styles/ButtonFiltre.css'

export default function ButtonFiltre({handleButtonClick}) {

    

  return (
    <div className='button-filtre'>
        <button  onClick={handleButtonClick}>   
            Filtrer
        </button>
        
    </div>
  )
  
}
