import React from 'react'
import '../../styles/CatalogueFiltre.css'
import flecheVersLeBas2 from '../../assets/fleche-vers-le-bas2.png'

export default function CatalogueFiltre() {
  return (
    <div className="blockTrier">
            <div className="container-nbr-chapitre">
                <div className="sous-container-nbr-chapitre">
                    <h3>Nombre de chapitre :</h3>
                    <div className="moinsDe">
                        <input type="number"/>
                    </div>
                    <img className="signe-inferieur" src={flecheVersLeBas2} alt="icone-fleche" width="30px" height="30px"/>
                    <div className="plusDe">
                        <input type="number"/>
                    </div>
                    <div className="checkboxText">
                        <input type="checkbox"/>
                        <p>Terminé</p>
                    </div>
                </div>
            </div>

            <div className="container-genre">
                <div className="sous-container-genre">
                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>

                    <div className="checkboxText genre">
                        <input type="checkbox"/>
                        <p>Genre</p>
                    </div>
                </div>
            </div>

            <div className="petitContainer3">
                <button className="btn-tri">
                    Trier
                </button>

                <button className="btn-effacer-tri">
                    X
                </button>
            </div>
        </div>
  )
}
