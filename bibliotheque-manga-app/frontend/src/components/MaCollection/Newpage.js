import React, { useState } from 'react'
import buttonPlus from '../../assets/btn-plus.png'
import '../../styles/MaCollection.css'




export default function Newpage() {


    const [newPages, setNewPages] = useState([]);
    


    const handleNewPageClick = () => {
        const newPage = 
        <div className={'new-page'} key={newPages.length}>
          <h3>New Page</h3> 
        </div>;
        setNewPages(prevPages => [...prevPages, newPage]);
        


    };


  return (
<div className={`container-new-page ${newPages.length > 0 ? 'insufficient-space' : ''}`}>

        {newPages}
        <div className={`button-new-page`} onClick={() => {handleNewPageClick();}}>
            <h3>New Page</h3>
            <img src={buttonPlus} className='icon-add' alt="ajouter" width="30px" height="30px" />
        </div>
    </div>
  )
}