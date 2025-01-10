import React from 'react'
import { useNavigate} from 'react-router-dom'
import './MovieCard.css'




const MovieCard = ({movie,user}) => {

  const {city }= user
  const {_id,title,genre,rating,portraitImgUrl} = movie
    const navigate = useNavigate();
   
    

  return (
   <>
 
    <div 
    className='moviecard'
    onClick = {()=>{navigate(`/movies/${city}/${_id}`)}}> 


   
      <div className='movieimg'
      style={{backgroundImage:`url(${portraitImgUrl})`}}>
        <p className='rating '><i className="bi bi-star p-2"></i>{rating}/10</p>
      </div>

      <div className='details'>
     <p className='title'>{title}</p>
     <p className='type'>{genre.join(", ")}</p>     
    </div>

    </div>

   
 
</>
  )
}

export default MovieCard