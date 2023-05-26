import React, { useState } from 'react'
import '../../../../styles/ButtonOptionCard.css'
import OptionCardSelector from './OptionCardSelector';

export default function ButtonOptionCard() {

    const [isOptionVisible, setOptionVisible] = useState(false);

    const handleButtonClick = () => {
        if(!isOptionVisible){
            setOptionVisible(true);
        } else {
            setOptionVisible(false);
        }
    }

  return (
    <div className="icone-option-card" onClick={handleButtonClick} >
        {isOptionVisible && <OptionCardSelector></OptionCardSelector>}
    </div>

  )
}
