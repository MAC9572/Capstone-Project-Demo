import React from 'react'
import './MusicStudio.css'

const MusicStudioCard = ({musicstudio}) => {
    const {imageUrl,name,location,Date} = musicstudio

  return (
    <>
    
    <div className='musiccard' > 


   
      <div className='musicimg'
      style={{backgroundImage:`url(${imageUrl})`}}>
        <p className='Date '>{Date}</p>
      </div>

      <div className='details'>
     <p className='title'>{name}</p>
     <p className='type'>{location}</p>     
    </div>

    </div>
    </>
  )
}

export default MusicStudioCard