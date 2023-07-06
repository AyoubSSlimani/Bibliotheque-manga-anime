import React from 'react'
import '../../../../styles/BlockCarte.css'
import { useDispatch, useSelector } from 'react-redux';
import { getNbCard } from '../../../../actions/filtres.action';



export default function BlockCarte() {
  const dispatch = useDispatch();
  
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(getNbCard(selectedValue));
    
  };

  const nbCard = useSelector(state => state.carteReducer.nbCard);
  
  
  return (
    <div className="blockCarteManga">
                <div className="select-nbr-card">
                    <select name="" id="" className="nbr-card" value={nbCard} onChange={handleSelectChange}>
                        <option value="25">25</option>
                    </select>
                </div>
            </div>
  )
}