import React from 'react'
import '../../styles/BlockCarte.css'


export default function BlockCarte({nbCard, handleSelectChange}) {
  return (
    <div className="blockCarteManga">
                <div className="select-nbr-card">
                    <select name="" id="" className="nbr-card" value={nbCard} onChange={handleSelectChange}>
                        <option value="12">12</option>
                        <option value="16">16</option>  
                        <option value="20">20</option>
                        <option value="24">24</option>
                        <option value="28">28</option>
                        <option value="32">32</option>
                    </select>
                </div>
            </div>
  )
}