import React from "react";
import arrowRight from '../../../../assets/superior.png'
import {
  toggleCheckboxes,
  toggleTerminer,
} from "../../../../actions/filtres.action";
import { useDispatch, useSelector } from "react-redux";

export default function BlockNombreChapitre({ nameComponent }) {
  const dispatch = useDispatch();
  const compName = nameComponent;

  const handleTerminerChange = (checkboxId) => {
    dispatch(toggleCheckboxes(checkboxId, compName));
  };

  const checkboxlist = useSelector((state) => state.carteReducer.checkboxes);
  const terminer = checkboxlist.find(
    (element) => element.mal_id === "complete"
  );

  return (
    <div className="filtre-chapitre">
        <div className="filtre-chapitre-container">
            <h3>Nombre de chapitres</h3>
            <input type="number" name="nb-chapitre-prev" id="nb-chapitre-prev" />
            <img src={arrowRight} alt="hello" className="superior" />
            <input type="number" name="nb-chapitre-next" id="nb-chapitre-next" />
        </div>
    </div>
    
  );
}
