import React from 'react'
import './Premiere.css'




const PremiereCard = ({premiere}) => {

  
  const {imageUrl,name,language} = premiere

   
    

  return (
   <>
 
    <div 
    className='premiereCard'
    > 


   
      <div className='premiereimg'
      style={{backgroundImage:`url(${imageUrl})`}}>
       
      </div>

      <div className='details'>
     <p className='title fw-bold'>{name}</p>
     <p className='type '>{language}</p>     
    </div>


    </div>

   
 
</>
  )
}

export default PremiereCard