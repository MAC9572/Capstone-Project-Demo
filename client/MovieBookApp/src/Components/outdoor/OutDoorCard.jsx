import React from 'react'
import './OutDoor.css'

const OutDoorCard = ({outdoor}) => {
    const {imageUrl,name,location,Date} = outdoor

  return (
    
    
    <div className='outcard' > 


   
      <div className='outimg'
      style={{backgroundImage:`url(${imageUrl})`}}>
        <p className='Date '>{Date}</p>
      </div>

      <div className='details'>
     <p className='title'>{name}</p>
     <p className='type'>{location}</p>     
    </div>

    </div>
    
  )
}

export default OutDoorCard