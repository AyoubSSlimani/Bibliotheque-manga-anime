import '../../styles/Caroussel.css'
import '../../styles/CarteCaroussel.css'
import oeil from '../../assets/oeil.png'
import flecheGauche from '../../assets/flecheGauche.png'
import flecheDroite from '../../assets/flecheDroite.png'
import React, {useState} from 'react' 
import {isEmpty} from "../Utils"



function Caroussel({ title, data }){


    const imgCount = 16;
    const cardPerPage = 4;

    const [startIndex, setStartIndex] = useState(0);
    const [isValidRight, setIsValidRight] = useState(true);
    const [isValidLeft, setIsValidLeft] = useState(false);
    console.log(startIndex, isValidRight, isValidLeft)

    const handleNextRightPage = () => {
         if(startIndex + cardPerPage < data.length) {
            setStartIndex(startIndex + cardPerPage);
            if(!isValidLeft){
                console.log("oui")
                setIsValidLeft(true);
            } else {
                console.log("non")
                setIsValidRight(false);
            }
            
        } else {
            setIsValidRight(false)
        }
    };

    const handleNextLefttPage = () => {
        if (startIndex - cardPerPage >= 0) {
            setStartIndex(startIndex - cardPerPage);
            if(!isValidRight){
                setIsValidRight(true);
            } else {
                setIsValidLeft(false);
            }
        } else { 
            setIsValidLeft(false);        
        }
    };
    
    return(
        <div className='containerCaroussel'>    
            <div className='title'>
                <img src={oeil} alt="icone-oeil" className="icone-title" height="30px" width="30px"/>
                <h2>{title}</h2>
            </div>
            <div className="page">

                <img  src={flecheGauche} onClick={handleNextLefttPage} alt="icone-flecheGauche" 
                className={isValidLeft ? 'icone-fleche-gauche' : 'icone-fleche-gauche-unable' } height="50px" width="50px"/>

                {!isEmpty(data) && data.slice(startIndex, startIndex + cardPerPage).map((carte) => {
                    return (
                    <div key={carte.id} className="carte-caroussel">
                    <img src={carte.cover}  alt={carte.name} height='50px' width='50px'/>
                    <h3 className='title-carte-carousel'>{carte.name}</h3>
                    <div className="ligne"></div>
                    <div className="type">{carte.type}</div>
                    </div>
                    );
       
                })};
                

        
                <img  src={flecheDroite} onClick={handleNextRightPage} alt="icone-flecheDroite" 
                className={isValidRight ? 'icone-fleche-droite' : 'icone-fleche-droite-unable'} height="50px" width="50px"/>


            </div>
        </div>
    )

}

// 

export default Caroussel