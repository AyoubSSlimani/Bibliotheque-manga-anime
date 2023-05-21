import React from 'react'
import {tabGenre} from '../data/DataGenre.js'
import '../styles/CheckboxGenre.css'

export default function CheckboxGenre() {


    const nbGenre = 15;

    const divGenre = [];
    // for(let i=0; i < nbGenre; i++){
    //     divGenre.push(<CheckboxGenre key={i}></CheckboxGenre>);
    // }

    for(let i=0; i < tabGenre.length; i++){
        divGenre.push(
        <div className="checkboxText genre">
          <input type="checkbox"/>
          <p>{tabGenre[i]}</p>
        </div>
        )
    }
  return (
    <div className="container-genre">
        <div className="sous-container-genre">
          {divGenre}
        </div>
    </div>
  )
}
