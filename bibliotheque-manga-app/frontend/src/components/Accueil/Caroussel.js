import oeil from '../../assets/oeil.png'
import flecheGauche from '../../assets/flecheGauche.png'
import flecheDroite from '../../assets/flecheDroite.png'
import React, {useState} from 'react' 
import {isEmpty} from "../Utils"



function Caroussel({ title, data }){

    const cardPerPage = 4;
    const [startIndex, setStartIndex] = useState(0);

    const handleNextRightPage = () => {
         if(startIndex + cardPerPage < data.length) {
            setStartIndex(startIndex + cardPerPage);
         }
        };

    const handleNextLefttPage = () => {
        if (startIndex - cardPerPage >= 0) {
            setStartIndex(startIndex - cardPerPage);
        }
    };
    
    return(
        <div className='containerCaroussel'>    
            <div className='title'>
                <div className="icone-title">
                <img src={oeil} alt="icone-oeil" height="30px" width="30px"/>
                </div>
                <h2>{title}</h2>
            </div>
            <div className="page">

                <img  src={flecheGauche} onClick={handleNextLefttPage} alt="icone-flecheGauche" 
                className= 'icone-fleche-gauche'/>
                <div className='block-caroussel'>
                {!isEmpty(data) && data.slice(startIndex, startIndex + cardPerPage).map((carte) => {
                    return (
                    <div key={carte.mal_id} className="carte-caroussel">
                    <img src={carte.images.jpg.image_url}  alt={carte.title}/>
                    <h3 className='title-carte-carousel' title-length-sup21={carte.title.length > 21 ? "true" : "false"}>{carte.title}</h3>
                    <div className="ligne-carte-carousel"></div>
                    <div className="type">{carte.type}</div>
                    </div>
                    );
       
                })}
            </div>
                

        
                <img  src={flecheDroite} onClick={handleNextRightPage} alt="icone-flecheDroite" 
                className='icone-fleche-droite'/>


            </div>
        </div>
    )

}

// 

export default Caroussel