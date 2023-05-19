import '../styles/Caroussel.css'
import oeil from '../assets/oeil.png'
import flecheGauche from '../assets/flecheGauche.png'
import flecheDroite from '../assets/flecheDroite.png'
import CarteCaroussel from './CarteCaroussel'


function Caroussel(){
    const imgCount = 4;

    const divImg = [];
    for(let i=0; i < imgCount; i++){
        divImg.push(<CarteCaroussel key={i}></CarteCaroussel>);
    }
    console.log(divImg);

    return(
        <div className='containerCaroussel'>
            <div className="title">
                <img src={oeil} alt="icone-oeil" className="icone-title" height="30px" width="30px"/>
                <h2>Un titre</h2>
            </div>
            <div className="page">
                <img src={flecheGauche} alt="icone-flecheGauche" className="icone-fleche" height="50px" width="50px"/>
                {divImg}
                <img src={flecheDroite} alt="icone-flecheDroite" className="icone-fleche" height="50px" width="50px"/>

            </div>
        </div>
    )
}

export default Caroussel