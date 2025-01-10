import React from 'react'
import './LiveEvent.css'




const LiveEventCard = ({event}) => {

  
  const {imageUrl} = event

   
    

  return (
   <>
 
    <div 
    className='eventcard'
    > 


   
      <div className='eventimg'
      style={{backgroundImage:`url(${imageUrl})`}}>
       
      </div>


    </div>

   
 
</>
  )
}

export default LiveEventCard