import React from 'react'
import '../../styles/MaCollectionFiltre.css'
import buttonPlus from '../../assets/btn-plus.png'


export default function MaCollectionFiltre() {
  return (
    <div className='ma-collection-filtre'>
        <img src={buttonPlus} className='icon-add' alt="ajouter" width="30px" height="30px" />
        <p>Ajouter un filtre</p>
    </div>
  )
}
