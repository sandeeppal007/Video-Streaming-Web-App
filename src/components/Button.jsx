import React from 'react'

function Button({name}) {
  return (
    <div className='flex justify-center '>
    <button className=' rounded p-2 m-5 border bg-gray-200'>{name}</button>

    </div>
  )
}

export default Button