import React, { useState } from 'react'
import CatalogueFiltre from './CatalogueFiltre';
import '../../../../styles/ButtonFiltre.css'

export default function ButtonFiltre() {

    const [isDivVisible, setDivVisible] = useState(false);

    const handleButtonClick = () => {
        if(!isDivVisible){
            setDivVisible(true);
        } else {
            setDivVisible(false);
        }
    }

  return (
    <div className='button-filtre'>
        <button  onClick={handleButtonClick}>   
            Filtrer
        </button>
        {isDivVisible && <CatalogueFiltre></CatalogueFiltre>}
    </div>
  )
  
}
