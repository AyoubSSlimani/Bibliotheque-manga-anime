import React from 'react'

export default function OptionCardSelector({selectRef}) {


  return (
    <div className='option-card' ref={selectRef}>
        <select name="" id="" className="option-deffilement selector">
            <option value="12">A lire</option>
            <option value="12">option</option>
        </select>
    </div>
  )
}
