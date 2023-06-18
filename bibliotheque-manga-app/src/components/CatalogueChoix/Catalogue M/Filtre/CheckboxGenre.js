import React from 'react';
import '../../../../styles/CheckboxGenre.css';

export default function CheckboxGenre() {
  const tabGenre = [
    "Action", "Aventure", "Combats", "Comédie", "Drame", "Ecchi", "École", "Fantaisie",
    "Horreur", "Isekai", "Josei", "Mystère", "Psychologique", "Quotidien", "Romance",
    "Seinen", "Shônen", "Shôjo", "Sports", "Surnaturel", "Tournois", "Yaoi", "Yuri"
  ];


  return (
    <div className="container-genre">
      <div className="sous-container-genre">
        {tabGenre.map((genre, index) => (
          <div key={index} className={genre}>
            <input
              type="checkbox"/>
            <p>{genre}</p>
          </div>
        ))}
      </div>
      <button>Décocher tout</button>
    </div>
    
  );

}