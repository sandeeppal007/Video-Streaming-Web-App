import React from 'react'
import Button from './Button'

function ButtonList() {
    let ButtonName = ["All","Songs","Live","Soccer","News","Movies","Cooking","Coding"]
  return (
    <div className='flex justify-center'>

{
    ButtonName.map((name,index)=> <Button key={index} name={name}/>) 
}
    
    </div>
  )
}

export default ButtonList