import React, { useState } from 'react'
import {tabGenre} from '../../../../data/DataGenre.js'
import '../../../../styles/CheckboxGenre.css'

export default function CheckboxGenre() {


    // const divGenre = [];
    // for(let i=0; i < nbGenre; i++){
    //     divGenre.push(<CheckboxGenre key={i}></CheckboxGenre>);
    // }

    // for(let i=0; i < tabGenre.length; i++){
    //     divGenre.push(
    //     <div className="checkboxText genre">
    //       <input type="checkbox"/>
    //       <p>{tabGenre[i]}</p>
    //     </div>
    //     )
    // }
    
    // const [tabGenre, setGenreSelected] = useState(false);

    // const selectGenre = (id) => {
    //   const updatedTabGenre = tabGenre.map((genre, index) => {
    //     if(index === id){
          
    //     }
      // });
      
    
   
  return (
    <div className="container-genre">
        <div className={`sous-container-genre`} >
          {tabGenre.map((genre, index) => (
            <div key={index} className="checkboxText genre">
            <input type="checkbox" />
        
            <p>{genre}</p>
          </div>
          ))
          }
        </div>
    </div>
  )
        };
