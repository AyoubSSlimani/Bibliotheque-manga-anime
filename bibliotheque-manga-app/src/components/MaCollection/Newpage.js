import React, { useState } from 'react'
import buttonPlus from '../../assets/btn-plus.png'
import '../../styles/MaCollection.css'
import MaCollection from './MaCollection';




export default function Newpage({changeClass}) {


    const [newPages, setNewPages] = useState([]);
    console.log(newPages);


    const handleNewPageClick = () => {
        const newPage = 
        <div className={`new-page button-title button-underline`} key={newPages.length} onClick={(event) => { changeClass(event);}}>
          <h3>New Page</h3> 
        </div>;
        setNewPages(prevPages => [...prevPages, newPage]);
        console.log(newPage);


    };


  return (
    <div className='container-new-page' >
        {newPages}
        <div className={`new-page button-title button-underline `} onClick={(event) => {handleNewPageClick();}}>
            <h3 className = "Hello">New Page</h3>
            <img src={buttonPlus} className='icon-add' alt="ajouter" width="30px" height="30px" />
        </div>
    </div>
  )
}