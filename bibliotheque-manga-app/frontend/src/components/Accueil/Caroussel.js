import oeil from '../../assets/oeil.png'
import flecheGauche from '../../assets/flecheGauche.png'
import flecheDroite from '../../assets/flecheDroite.png'
import React, {useState} from 'react' 
import {isEmpty} from "../Utils"



function Caroussel({ title, data }){

    const animeTypeArray = ["TV", "Movie", "OVA", "Special", "ONA", "Music"];
    const mangaTypeArray = ["Manga", "Novel", "Light Novel", "One-shot", "Doujin", "Manhwa", "Manhua"];
    

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
        <div className='container-carousel'>    
            <div className='title-carousel'>
                <div className="icone-title">
                <img src={oeil} alt="icone-oeil"/>
                </div>
                <h2>{title}</h2>
            </div>
            <div className="container-card-carousel">

                <img  src={flecheGauche} onClick={handleNextLefttPage} alt="icone-flecheGauche" 
                className= 'icone-fleche-gauche'/>
                <div className='sous-container-card-carousel'>
                {!isEmpty(data) && data.slice(startIndex, startIndex + cardPerPage).map((carte) => {
                    const isMangaType = mangaTypeArray.includes(carte.type);
                    const isAnimeType = animeTypeArray.includes(carte.type);
                    const typeClassName = `type ${isAnimeType ? "type-anime" : isMangaType ? "type-manga" : "type-else"}`;
                    return (
                    <div key={carte.mal_id} className="card-carousel">
                    <img src={carte.images.jpg.image_url}  alt={carte.title} className='carousel-card-image'/>
                    <h3 className='carousel-card-title' title-length-sup21={carte.title.length > 21 ? "true" : "false"}>{carte.title}</h3>
                    <div className="ligne-card-carousel"></div>
                    <div className={typeClassName}>{carte.type}</div>
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