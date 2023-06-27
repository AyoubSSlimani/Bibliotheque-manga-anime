import React, { useEffect } from 'react';
import '../../../../styles/CheckboxGenre.css';
import { useDispatch, useSelector } from 'react-redux';
import { DecocherTout, toggleCheckboxes } from '../../../../actions/checkboxes.action';

export default function CheckboxGenre() {
  
  const dispatch = useDispatch();
  
  const checkboxes = useSelector(state => state.carteReducer.checkboxes);


  const handleCheckboxChange = (checkboxId) => {
    dispatch(toggleCheckboxes(checkboxId));
  };

  const handleUncheckAll = () => {
    dispatch(DecocherTout());
    
  };

  return (
    <div className="container-genre">
      <div className="sous-container-genre">
        {checkboxes.map((checkbox => (
          <div key={checkbox.id} className='checkbox'>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
              />
            <p>{checkbox.name}</p>
          </div>
        )))}
      </div>
      <button onClick ={handleUncheckAll}>Décocher tout</button>
    </div>
    
  );

}