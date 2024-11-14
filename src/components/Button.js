import React from 'react'

function Button({name}) {
  return (
    <div >
      <button className='p-2  m-2 rounded-lg shadow-sm bg-slate-200'>{name}</button>  
    </div>
  )
}

export default Button
