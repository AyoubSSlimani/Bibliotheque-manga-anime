import '../../styles/Caroussel.css'
import oeil from '../../assets/oeil.png'
import flecheGauche from '../../assets/flecheGauche.png'
import flecheDroite from '../../assets/flecheDroite.png'
import CarteCaroussel from './CarteCaroussel'
import React, {useState} from 'react' 


function Caroussel(){
    const imgCount = 16;
    const cardPerPage = 3;

    const [startIndex, setStartIndex] = useState(0);
    const [isValidRight, setIsValidRight] = useState(true);
    const [isValidLeft, setIsValidLeft] = useState(false);

    const divCards = [];
    for(let i=0; i < imgCount; i++){
        divCards.push(<CarteCaroussel key={i}></CarteCaroussel>);
    }

    const handleNextRightPage = () => {
         if(startIndex + cardPerPage < divCards.length) {
            setStartIndex(startIndex + cardPerPage);
        } else {
            setIsValidRight(!isValidRight)
        }
    };

    const handleNextLefttPage = () => {
        if (startIndex - cardPerPage > 3) {
            setStartIndex(startIndex - cardPerPage);
            
        } else { 
            setIsValidLeft(isValidLeft);        
                
        }
    };
    
    return(
        <div className='containerCaroussel'>    
            <div className="title">
                <img src={oeil} alt="icone-oeil" className="icone-title" height="30px" width="30px"/>
                <h2>Un titre</h2>
            </div>
            <div className="page">

                <img onClick={handleNextLefttPage} src={flecheGauche} alt="icone-flecheGauche" className={isValidLeft ? 'icone-fleche-gauche' : 'icone-fleche-gauche-unable'} height="50px" width="50px"/>

                {divCards.slice(startIndex, startIndex + cardPerPage).map((divCard, index) => (
                <div key={index}>{divCard}</div>
                ))}  

        
                <img onClick={handleNextRightPage} src={flecheDroite} alt="icone-flecheDroite" className={isValidRight ? 'icone-fleche-droite' : 'icone-fleche-droite-unable'} height="50px" width="50px"/>


            </div>
        </div>
    )
}

export default Caroussel